import Style from "./button-remove.module.css";
import "./../button.css";
import Trash from "./trash.svg";


const ButtonRemove = ({deleteItem, id}) => {

    console.log("in button item")
    return (
        <button onClick={()=> {deleteItem(id)}}
                className={`button + ${Style.right} + ${Style.right}`}>
            <img className={Style} src={Trash}/>
        </button>
    )
}

export default ButtonRemove;