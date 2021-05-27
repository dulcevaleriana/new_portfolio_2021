import {Link} from "react-router-dom";
import MESA from '../image/mesa.svg';

const home = (props:any) => {
    return(
        <div className="class-home">
            <div></div>
            <div>
                <h1>Hello</h1>
                <h1>I'm <strong>Dulce Valeriana</strong></h1>
                <h2>Front End / Web Developer</h2>
                <Link to="/contact">
                    <button>
                        Contact me
                    </button>
                </Link>
            </div>
            <div>
                <span className="class-base">
                    <div className="class-animacion-3"/>
                </span>
                <div className="class-person-up"/>
                <img src={MESA} alt="MESA"/>
                <span className="class-base-2">
                    <div className="class-animacion-8"/>
                </span>
                <div className="class-animacion-9"/>
            </div>
        </div>
    )
}

export default home;