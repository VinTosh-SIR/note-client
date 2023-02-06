import Style from "./control-item.module.css";
import ButtonChange from "../../../../../ui/buttons/button-change/button-change";
import ButtonImportant from "../../../../../ui/buttons/button-important/button-important";
import ButtonRemove from "../../../../../ui/buttons/button-remove/button-remove";


const ControlItem = ({deleteItem}) => {

    return (
        <div className={Style.control}>
            <ButtonChange/>
            <ButtonImportant/>
            <ButtonRemove deleteItem={deleteItem}/>
        </div>

    )
}

export default ControlItem;