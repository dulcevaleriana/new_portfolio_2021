// import ClassAnimacion1 from './SVG/class-animacion-1';

import IMG_PRUEBA from "../image/animacion-1.svg";

const animate = (props:any) => {
return(
    <div className="class-animate">
        <header className="App-header">
        {/* Prueba animacion */}
        <div className="class-animacion-4"/>
        <div className="class-animacion-1"/>
        <div className="class-animacion-2"/>
        <div className="class-animacion-3"/>
        </header>
        <div>
        <div className="class-animacion-0"/>
        <div className="class-animacion-5"/>
        <div className="class-animacion-7"/>
        </div>
        <div>
        <div className="class-animacion-8"/>
        <div className="class-animacion-9"/>
        </div>
        <div>
            {/* <div className="class-animacion-b1"/> */}
            <img src={IMG_PRUEBA} alt="img"/>
            {/* <ClassAnimacion1/> */}

        </div>
    </div>
)
}

export default animate;