import React from "react";
import {NavLink} from "react-router-dom";

import LOGO from '../image/icon-logo.svg'

const menu = (props:any) => {
    const menuList = props.menuList;
    return(
        <div className="class-menu">
            <NavLink to="/">
                <img src={LOGO} alt="LOGO"/>
            </NavLink>
            <ul>
                {menuList.map((list:any,i:any) =>
                <li key={i}>
                    <NavLink to={list.link} activeClassName="active">{list.name}</NavLink>
                </li>
                )}
            </ul>
        </div>
    )
}

export default menu;