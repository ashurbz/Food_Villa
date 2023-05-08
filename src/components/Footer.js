import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () =>{
 
    const user = useContext(UserContext);
    const{userInfo} =user
    return (
        <>
        <div className="h-20 bg-purple-50">
        <h3 className="text-center font-bold"> This Site Is Developed By {userInfo.name} and {userInfo.email} </h3>
       
        </div>
        </>
    )
}

export default Footer;
