import Style from "./list-items.module.css";
import Item from "./item/item";


const ListItems = ({listItems, deleteItem}) => {


    return (
        <div className={Style.items}>
            <Item listItems={listItems} deleteItem={deleteItem}/>
        </div>
    )

}

export default ListItems;