import {Link} from "react-router-dom";

// import PERSON from '../image/animacion-frame-02.png';
import MESA from '../image/mesa.svg';
// import SILLA from '../image/silla.svg';

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
                <div className="class-person-up"/>
                {/* <img src={PERSON} alt="PERSON"/> */}
                <img src={MESA} alt="MESA"/>
                {/* <img src={SILLA} alt="SILLA"/> */}
            </div>
        </div>
    )
}

export default home;