import Style from "./button-all.module.css";
import "./../button.css";


const ButtonAll = () =>{
    return(
        <button className={`button-filter ${Style.all}`}>All</button>
    )
}

export default ButtonAll;