 import { useRouteError } from "react-router-dom";

const ErrorComponent = () =>{
    const err = useRouteError();
 
    
    // ask about error.message
    const { status,statusText}= err;
    

   
    return(
        <>
        <h1>OOPS!!!!!!</h1>
        <h2>Something Went Wrong</h2>
        <div>
            <h3>{status}</h3>
            <h2>{statusText}</h2>
        </div>
        </>
    )
}

export default ErrorComponent;