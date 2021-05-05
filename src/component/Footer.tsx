import LOGO from '../image/icon-logo.svg';
import JSONMenu from '../json/JSONMenu.json';
import {NavLink} from "react-router-dom";

import SM1 from '../image/Layer2.svg';
import SM2 from '../image/Layer-1.svg';
import SM3 from '../image/Layer-2.svg';

const Footer = () => {
    return(
        <div className="class-Footer">
            <div>
                <img src={LOGO} alt="LOGO"/> 
                <strong>Dulce Valeriana</strong>
            </div>
            <ul>
                {JSONMenu.menuList.map((list:any,i:any) =>
                <li key={i}>
                    <NavLink to={list.link} activeClassName="active">{list.name}</NavLink>
                </li>
                )}
            </ul>
            <div>
                <img src={SM1} alt="SM1"/>
                <img src={SM2} alt="SM2"/>
                <img src={SM3} alt="SM3"/>
            </div>
            <hr/>
            <p>@2021 Dulce Valeriana Portfolio  |  Privacy Polity </p>
        </div>
    )
}

export default Footer;