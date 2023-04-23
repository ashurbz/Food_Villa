import { CART_IMG_URL } from "../../../constant";
const Cart = () => {
    return (
      <>
        <img
          className="cart"
          alt="cart-icon"
          src={CART_IMG_URL}
        ></img>
      </>
    );
  };
  
  export default Cart;