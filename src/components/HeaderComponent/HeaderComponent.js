import NavItems from "./NavItems";
import Cart from "./Cart.js"
import { LOGO_IMG_URL } from "../../../constant";
import Auth from './Auth'

const Title = () => {
    return (
      <>
        <a href="/">
          <img
            className="logo"
            src={LOGO_IMG_URL}
          ></img>
        </a>
      </>
    );
  };


  const HeaderComponent = () => {
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
          <div>
            <Auth />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeaderComponent;