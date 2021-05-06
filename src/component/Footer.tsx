import LOGO from '../image/icon-logo.svg';
import JSONMenu from '../json/JSONMenu.json';
import {NavLink} from "react-router-dom";
import AboutMeJSON from '../json/AboutMeJSON.json';

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
            {AboutMeJSON.AboutMeJSON.map((props) =>
                <div>
                    <a target="_blank" href={props.links[0]}>
                        <img src={SM1} alt="SM1"/>
                    </a>
                    <a target="_blank" href={props.links[1]}>
                        <img src={SM3} alt="SM3"/>
                    </a>
                    <a target="_blank" href={props.links[2]}>
                        <img src={SM2} alt="SM2"/>
                    </a>
                </div>
            )}
            <hr/>
            <p>@2021 Dulce Valeriana Portfolio  |  Privacy Polity </p>
        </div>
    )
}

export default Footer;