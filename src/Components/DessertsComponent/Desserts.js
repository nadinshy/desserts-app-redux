import { useSelector } from "react-redux";
import dataDesserts from "../../data/dataDesserts";
import { getSelectedCategory } from "../../redux/dessertsSlice";
import Cake from "./Cake";


const Desserts = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            {dataDesserts
            .filter (cake => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === cake.category;
            })
            .map(cake => <Cake key={cake.id} cake={cake}/>)}
        </div>
    )
}

export default Desserts;