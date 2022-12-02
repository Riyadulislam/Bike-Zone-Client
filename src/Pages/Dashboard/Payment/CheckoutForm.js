import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [error, setError] = useState(' ')
    const [tranjectionid, setTranjectionid] = useState(' ');
    const [success, setSuccess] = useState(' ');
    const [clientSecret, setClientSecret] = useState("");
    const { price, name, email, _id, productId,service_id} = booking
    console.log(_id)


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            console.log('[error]', error);
        } else {


            console.log('[PaymentMethod]', paymentMethod);
            setError(' ')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email

                    },
                },
            },
        );
        if (confirmError) {
            setError(confirmError)
            return;
        }
        if (paymentIntent.status == 'succeeded') {
            console.log('cardinfo', card)
            const payment = {
                price,
                tranjectionid: paymentIntent.id,
                email,
                bookingId:_id,
                productId,
                service_id:service_id
            }
            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('congratulation your payment completed')
                        setTranjectionid(paymentIntent.id)
                    }
                })


        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary btn-xs mt-4' type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className='text-xl text-red-400 font-semi bold'>{error}</p>
            <p className='text-xl text-red-400 font-semi bold'>{success}</p>
        </form>
    );
};



export default CheckoutForm;