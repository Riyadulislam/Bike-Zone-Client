import { useEffect, useState } from "react"

const useSeller = email => {
    
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://usedproduct-resel-server-side.vercel.app/users/sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                
                  
                })
        }
    }, [email])
    return [isSeller]
}

export default useSeller;