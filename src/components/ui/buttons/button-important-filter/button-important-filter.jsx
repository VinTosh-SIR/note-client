import Style from "./button-important-filter.module.css";
import "./../button.css";


const ButtonImportantFilter = () =>{
    return(
        <button className={`button-filter ${Style.important}`}>Important</button>
    )
}

export default ButtonImportantFilter;