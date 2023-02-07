import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Cake = ({ cake }) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div>
            <img src={`${cake.img}.jpg`} alt='cake'/>
            <h2>{cake.name}</h2>
            <p>{cake.price}</p>
            <ChangeQuantity key={quantity} quantity={quantity} setQuantity={setQuantity}/>
            
            <button onClick={() => {dispatch (addItemToCart ({cake, quantity}))}}>Add to cart</button>

        </div>
    )
}

export default Cake;