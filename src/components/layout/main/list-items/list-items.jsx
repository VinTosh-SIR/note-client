import Style from "./list-items.module.css";
import Item from "./item/item";


const ListItems = ({listItems, deleteItem,isUpdating, setIsUpdating, setUpdateItemText, updateItemText, updateItem}) => {


    return (
        <div className={Style.items}>
            <Item listItems={listItems} deleteItem={deleteItem}
                  isUpdating={isUpdating} setIsUpdating={setIsUpdating}
                  updateItemText={updateItemText} setUpdateItemText={setUpdateItemText}
                  updateItem={updateItem}/>
        </div>
    )

}

export default ListItems;