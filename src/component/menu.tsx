import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import useMediaQuery from "../js/jsMediaQuery";
import GoogleEasyTranslate from './googleEasyTranslate';

import LOGO from '../image/icon-logo.svg';
import LOGO_MENU from '../image/logo-menu.svg';
import LOGO_X from '../image/logo-x.svg';

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
                    <img src={LOGO_MENU} alt="LOGO" onClick={() => setOpenMenu(true)}/>
                ):(
                    <img src={LOGO_X} alt="LOGO" onClick={() => setOpenMenu(false)}/>
                )}
                </>
            )}
            {(isPageAvaible || openMenu) &&
                <ul className={isPageAvaible ? "" : "class-menuSmartphone"}>
                    <li>
                        <GoogleEasyTranslate/>
                    </li>
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