import Style from "./main.module.css";
import ListItems from "./list-items/list-items";
import InputAddItem from "../../ui/inputs/input-add-item/input-add-item";
import InputSearch from "../../ui/inputs/input-search/input-search";
import ButtonImportantFilter from "../../ui/buttons/button-important-filter/button-important-filter";
import ButtonAll from "../../ui/buttons/button-all/button-all";
import ButtonDoneFilter from "../../ui/buttons/button-done-filter/button-done-filter";

const Main = ({addItem, listItems, itemText, setItemText, deleteItem, isUpdating, setIsUpdating, updateItemText, setUpdateItemText, updateItem}) => {
    return (
        <main className={Style}>
            <div className={Style.filters}>
                <InputSearch/>
                <div className={Style.items}>
                    <ButtonAll/>
                    <ButtonImportantFilter/>
                    <ButtonDoneFilter/>
                </div>
            </div>
            <ListItems listItems={listItems} deleteItem={deleteItem} isUpdating={isUpdating}
                       setIsUpdating={setIsUpdating} setUpdateItemText={setUpdateItemText}
                       updateItemText={updateItemText} updateItem={updateItem}/>
            <InputAddItem addItem={addItem} itemText={itemText} setItemText={setItemText}/>
        </main>
    )
}

export default Main;
