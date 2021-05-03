import React from "react";
import {
  Link
} from "react-router-dom";

import LOGO from '../image/icon-logo.svg'

const menu = (props:any) => {
    const menuList = props.menuList;
    return(
        <div className="class-menu">
            <img src={LOGO} alt="LOGO"/>
            <ul>
                {menuList.map((list:any,i:any) =>
                <li key={i}>
                    <Link to={list.link}>{list.name}</Link>
                </li>
                )}
            </ul>
        </div>
    )
}

export default menu;