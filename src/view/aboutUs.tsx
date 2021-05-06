import MESA from '../image/mesa.svg';
import SILLA from '../image/silla.svg';

const aboutUs = (props:any) => {
    return(
        <div className="class-aboutUs">
            <div></div>
            <div>
                <div>
                    <h1>Hello</h1>
                    <h1>I'm <strong>Dulce Valeriana</strong></h1>
                    <h2>Front End / Web Developer</h2>
                </div>
                <div>
                    <h1>Hello</h1>
                    <h1>I'm <strong>Dulce Valeriana</strong></h1>
                    <h2>Front End / Web Developer</h2>
                </div>
            </div>
            <div>
                <div className="class-animacion-0"/>
                <img src={MESA} alt="MESA"/>
                <img src={SILLA} alt="MESA"/>
            </div>
        </div>
    )
}

export default aboutUs;