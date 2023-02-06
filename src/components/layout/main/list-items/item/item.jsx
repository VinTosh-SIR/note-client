import Style from "./item.module.css";
import ControlItem from "./control-item/control-item";;

const Item = ({listItems, deleteItem}) => {

    return (
        <span className={Style}>
            {
                listItems.map(item => (
                    <div className={Style.item} key={item._id}>
                        <p>{item.item}</p>
                        <ControlItem id={item._id} deleteItem={deleteItem}/>
                    </div>))
            }
        </span>
    )
}

export default Item;