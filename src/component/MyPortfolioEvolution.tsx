import JSONMyPortfolioEvolution from '../json/MyPortfolioEvolution.json';
import Footer from '../component/Footer';

import IMG4 from '../image/Image6.png';
import IMG5 from '../image/Image5.png';
import IMG6 from '../image/Image4.png';

const MyPortfolioEvolution = (props:any) => {
    return(
        <div className="class-MyPortfolioEvolution">
            {JSONMyPortfolioEvolution.JSONMyPortfolioEvolution.map((props, i) => (
                <div key={i}>
                    <h2>{props.title}</h2>
                    <div>
                        {props.info.map((data,i) => <p key={i}>{data}</p>)}
                    </div>
                    <div>
                        {props.img.map((img,i) => <img key={i} src={img} alt="IMG1"/>)}
                    </div>
                </div>
            ))}
            <div className="class-nextPage">
                <div>
                    <img src={IMG6} alt="IMG1"/>
                    <img src={IMG5} alt="IMG1"/>
                    <img src={IMG4} alt="IMG1"/>
                </div>
                <div>
                    <p>Siguiente Proyecto</p>
                    <h2 onClick={props.onClick}>Green Card </h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MyPortfolioEvolution;