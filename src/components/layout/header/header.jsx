import Style from "./header.module.css";
import Fan from "./fan-icon.jpg";

const Header = () => {
    return (
        <header className={Style}>
            <h1>Note Project</h1>
            <img src={Fan} alt="fan-icon" className={Style.fan} width="100" height="100"/>
        </header>
    );
}

export default Header;