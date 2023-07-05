import '../assets/css/header.css'
import HeaderLogo from '../assets/images/Logo.png'
import HeaderItem from "./HeaderItem.jsx";

const Header = () => {

  const listItem = [
    {itemName: "Home", itemRout: "/"},
    {itemName: "Menu", itemRout: "/menu"},
    {itemName: "About", itemRout: "/about"},
    {itemName: "Contact", itemRout: "/contact"},
  ]
  return (
      <header className="container header ">
        <div className="header__menu">
          <ul>
            {listItem.map(({itemName, itemRout}) =>
                <HeaderItem key={itemName} itemName={itemName} itemRout={itemRout}/>
            )}
          </ul>
        </div>

        <div className="header__logo">
          <img src={HeaderLogo} alt="Header Logo"/>
        </div>
      </header>
  );
};

export default Header;