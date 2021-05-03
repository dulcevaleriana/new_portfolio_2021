import React from "react";
import {
  Link
} from "react-router-dom";

const menu = (props:any) => {
    const menuList = props.menuList;
    return(
        <ul className="class-menu">
            {menuList.map((list:any,i:any) =>
            <li key={i}>
                <Link to={list.link}>{list.name}</Link>
            </li>
            )}
        </ul>
    )
}

export default menu;