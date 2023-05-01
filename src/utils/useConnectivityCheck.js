import { useEffect, useState } from "react";


const useConnectivityCheck = () =>{
    const [isConnected, setIsConnected] =useState(true);

    useEffect(()=>{

        const online =()=>{
            setIsConnected(true)
        }

        const offline =() =>{
            setIsConnected(false)
        }

        

        window.addEventListener('online',online)
        window.addEventListener('offline',offline)

            return ()=>{
                window.removeEventListener('online',online)
                window.removeEventListener('offline',offline)
            }

       



    },
    
    [])

    return isConnected;
}

export default useConnectivityCheck;