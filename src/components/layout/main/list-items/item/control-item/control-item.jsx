import Style from "./control-item.module.css";
import ButtonChange from "../../../../../ui/buttons/button-change/button-change";
import ButtonImportant from "../../../../../ui/buttons/button-important/button-important";
import ButtonRemove from "../../../../../ui/buttons/button-remove/button-remove";


const ControlItem = ({deleteItem, item, setIsUpdating, isUpdating}) => {

    return (
        <div className={Style.control}>
            <ButtonChange setIsUpdating={setIsUpdating} isUpdating={isUpdating} item={item}/>
            <ButtonImportant/>
            <ButtonRemove item={item} deleteItem={deleteItem}/>
        </div>

    )
}

export default ControlItem;