import Style from "./button-important.module.css";
import "./../button.css";
import Bookmark from "./bookmark-fill.svg";

const ButtonImportant = () =>{
    return(
        <button className={`button + ${Style.right}`}><img src={Bookmark}/></button>
    )
}

export default ButtonImportant;