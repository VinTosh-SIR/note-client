import Style from "./item.module.css";
import ControlItem from "./control-item/control-item";
import renderUpdateForm from "../../../../ui/inputs/input-update/input-update";

const Item = ({listItems, deleteItem, isUpdating, setIsUpdating, setUpdateItemText, updateItemText, updateItem}) => {

    return (
        <span className={Style}>
            {
                listItems.map(item => (
                    <div className={Style.item} key={item._id}>
                        {
                            isUpdating === item._id ? renderUpdateForm(setUpdateItemText, updateItemText, updateItem) : <>
                                <p>{item.item}</p>
                                <ControlItem setIsUpdating={setIsUpdating} isUpdating={isUpdating} item={item} deleteItem={deleteItem}/>
                            </>
                        }

                    </div>))
            }
        </span>
    )
}

export default Item;