import { useDispatch } from "react-redux";
import dataDesserts from "../../data/dataDesserts";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    // console.log(cartItem)
    const desserts = dataDesserts.find(item => item.id === cartItem.cakeId);
    const dispatch = useDispatch();
    // console.log(desserts)
    return(
        <div>
            <p>{desserts.name}</p>
            <p>{cartItem.quantity} Cake(s)</p>
            <p>Price: ${desserts.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
           <img className='icon' src="https://img.icons8.com/ios/512/waste.png" alt="trash" />
           </span>
            </div>
    )
}

export default CartItem;