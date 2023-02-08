import Style from "./input.search.module.css";

const InputSearch = () => {
    return (
      <form className={Style.form}>
        <input placeholder="type your request" type="text"/>
      </form>
    )
}

export default InputSearch;