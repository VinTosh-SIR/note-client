import Style from "./button-change.module.css";
import "./../button.css";
import Pen from "./pen-fill.svg"


const ButtonChange = ({setIsUpdating, item}) =>{
    return(
        <button onClick={()=> {setIsUpdating(item._id)}} className={`button + ${Style}`}><img src={Pen}/></button>
    )

}

export default ButtonChange;