import Style from "./button-change.module.css";
import "./../button.css";
import Pen from "./pen-fill.svg"


const ButtonChange = () =>{
    return(
        <button className={`button + ${Style}`}><img src={Pen}/></button>
    )
}

export default ButtonChange;