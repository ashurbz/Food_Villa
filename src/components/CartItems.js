import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItems from "./FoodItems";


const CartItems = () =>{

    const cartItems = useSelector((store)=>{
        return store.cart.items;
    })

    const dispatch =  useDispatch();

   const handleClearCart =() =>{
        dispatch(clearCart());
   }

    return (
        <div className="flex flex-wrap">
            <div>
            <button className="bg-green-100 p-2" onClick={()=>{
                handleClearCart()
            }}> Clear Cart</button>
            </div>
           
            {cartItems.map((item)=>{
                return   <FoodItems items ={item}/>
            })}
            
        </div>
    )
}

export default CartItems;