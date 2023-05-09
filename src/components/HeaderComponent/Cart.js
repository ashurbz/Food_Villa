
import cartIcon from '../../assets/cart.svg'
import { useSelector } from 'react-redux';


const Cart = () => {

  const cartItems = useSelector((store)=>{
    return store.cart.items
  })
  
  
    return (
      <>
      <div className='py-7 px-3' >
      <img width='50pxpx'
          className="cart"
          alt="cart-icon"
          src={cartIcon}
        ></img>
        <span className='m-5'>{cartItems.length}</span>
      </div>
      
      </>
    );
  };
  
  export default Cart;