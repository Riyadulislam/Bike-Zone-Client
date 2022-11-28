import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M7OM9A629pi4ZCR5bfvHuGQkH9dBHwM0mqdqjYM83gRG7OYqzfKcOzuRLdMcfOJaeUXwBrmFihKJqkDCUFhAi3T00BtOmUUB4');
const Payment = () => {
    const booking =useLoaderData()
   const {BikeName, price}=booking
 
    return (
        <div>
            <h1 className='text-2xl font-semibold'> Payment for {BikeName}</h1>
            <p  className='text-2xl font-semibold'>Please pay {price} for your Bike</p>
            
          <div className='my-6 w-96'>
            <Elements stripe={stripePromise}>
   <CheckoutForm booking={booking}></CheckoutForm>
    </Elements>
    </div>
    
        </div>
    );
};

export default Payment;