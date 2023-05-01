import NavItems from "./NavItems";
import Cart from "./Cart.js"
import { LOGO_IMG_URL } from "../../../constant";
import Auth from './Auth'
import { Link } from "react-router-dom";
import useConnectivityCheck from "../../utils/useConnectivityCheck";

const Title = () => {
    return (
      <>
        <Link to='/'>
        <img
            className="logo"
            src={LOGO_IMG_URL}
          ></img>
        </Link>
         
        
      </>
    );
  };


  const HeaderComponent = () => {
    const connection = useConnectivityCheck();
    return (
      <div className="header-container">
        <div className="left">
          <div className="logo-container">
            <Title />
          </div>
        </div>
        <div className="right">
          <div className="cart-container">
            <Cart />
          </div>
          <div className="nav-items-container">
            <NavItems />
          </div>
          <div style={{margin:'10px'}}>
            {connection ? '✅' :'🔴'}
          </div>
          <div>
            <Auth />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeaderComponent;