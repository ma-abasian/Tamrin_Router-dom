import {NavLink} from "react-router-dom";

const HeaderItem = ({itemName,itemRout}) => {
  return (
        <li className="header__menu-item">
          <NavLink to={itemRout}>{itemName}</NavLink>
        </li>
  );
};

export default HeaderItem;