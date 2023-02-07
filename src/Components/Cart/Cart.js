import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src='https://img.icons8.com/dotty/512/favorite-cart.png' alt="cart" />
            <h3>TOTAL: ${totalPrice}</h3>
           {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
          
            
        </div>
    )
}

export default Cart;