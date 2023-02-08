import Style from "./button-done-filter.module.css";
import "./../button.css";


const ButtonDoneFilter = () =>{
    return(
        <button className={`button-filter ${Style.done}`}>Done</button>
    )
}

export default ButtonDoneFilter;