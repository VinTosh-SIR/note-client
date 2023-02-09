import Style from "./input.search.module.css";
import Search from "./search.svg";

const InputSearch = () => {
    return (
      <form className={Style.form}>
        <input placeholder="type your request" type="text"/>
          <button><img alt="search-icon" src={Search}/></button>
      </form>
    )
}

export default InputSearch;