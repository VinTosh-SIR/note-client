import Style from "./main.module.css";
import ListItems from "./list-items/list-items";
import InputAddItem from "../../ui/inputs/input-add-item/input-add-item";
import InputSearch from "../../ui/inputs/input-search/input-search";

const Main = ({addItem, listItems, itemText, setItemText, deleteItem}) => {
    return (
        <main className={Style}>
            <InputSearch/>
            <ListItems listItems={listItems} deleteItem={deleteItem}/>
            <InputAddItem addItem={addItem} itemText={itemText} setItemText={setItemText}/>
        </main>
    )
}

export default Main;
