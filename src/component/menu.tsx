import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import useMediaQuery from "../js/jsMediaQuery";

import LOGO from '../image/icon-logo.svg';

const Menu = (props:any) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuList = props.menuList;
    let isPageAvaible = useMediaQuery("(min-width: 801px)");

    return(
        <div className="class-menu">
            {isPageAvaible ? (
                <NavLink to="/">
                    <img src={LOGO} alt="LOGO"/>
                </NavLink>
            ):(
                <>
                {!openMenu ? (
                    <img src={LOGO} alt="LOGO" onClick={() => setOpenMenu(true)}/>
                ):(
                    <img src={LOGO} alt="LOGO" onClick={() => setOpenMenu(false)}/>
                )}
                </>
            )}
            {(isPageAvaible || openMenu) &&
                <ul className={isPageAvaible ? "" : "class-menuSmartphone"}>
                    {menuList.map((list:any,i:any) =>
                    <li key={i} onClick={() => setOpenMenu(false)}>
                        <NavLink to={list.link} activeClassName="active">{list.name}</NavLink>
                    </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default Menu;