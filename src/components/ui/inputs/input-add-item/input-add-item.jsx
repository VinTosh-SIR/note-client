import Style from "./input-add-item.module.css";
import "../../buttons/button.css";
import "../inputs.css";



const InputAddItem = ({addItem, setItemText, itemText}) => {
    return (
        <form onSubmit={e => addItem(e)} className={Style.form}>
            <input type="text" onChange={event => {
                setItemText(event.target.value)
            }} value={itemText} placeholder="text"/>
            <button></button>
        </form>
    )
}

export default InputAddItem;