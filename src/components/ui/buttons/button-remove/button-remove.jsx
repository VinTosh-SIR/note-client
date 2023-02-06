import Style from "./button-remove.module.css";
import "./../button.css";
import Trash from "./trash.svg";
import item from "../../../layout/main/list-items/item/item";


const ButtonRemove = ({deleteItem}) => {


    return (
        <button onClick={()=> {deleteItem(item._id)}}
                className={`button + ${Style.right} + ${Style.right}`}>
            <img className={Style} src={Trash}/>
        </button>
    )
}

export default ButtonRemove;