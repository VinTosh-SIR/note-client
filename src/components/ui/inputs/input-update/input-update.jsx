import Style from "./input-update.module.css";

const renderUpdateForm = (setUpdateItemText, updateItemText, updateItem) => {
    return (
        <form onSubmit={(e)=>{updateItem(e)}} className={Style}>
            <input onChange={(e)=> setUpdateItemText(e.target.value)}
                  value={updateItemText} type="text" placeholder="New Item"/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default renderUpdateForm;