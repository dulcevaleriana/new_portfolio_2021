import JSONGreenCard from '../json/GreenCard.json';
import Footer from '../component/Footer';
import NextPage from '../component/NextPage';
import ImageGallery from 'react-image-gallery';

import IMG1 from '../image/Web1920–6.png';
import IMG2 from '../image/Web1920–2.png';
import IMG3 from '../image/Web1920–1.png';

const GreenCard = (props:any) => {

    return(
        <div className="class-GreenCard">
            <NextPage
                IMG_A={IMG1}
                IMG_B={IMG2}
                IMG_C={IMG3}
                onClick={props.onClick}
                linkGitHub="https://github.com/dulcevaleriana/green-card-web-app"
                linkProyect="https://greencard.do/"
                namePage="Unicef"
            />
            <h2>About Green Card</h2>
            {JSONGreenCard.JSONGreenCard.map((props, i) => (  
                <div key={i}>
                    <div>
                        {props.info.map((data,i) => <p key={i}>{data}</p>)}
                    </div>
                    <div>
                    <ImageGallery items={props.img} />
                    <img key={i} src={props.img[0].original} alt="IMG1"/>
                    <img key={i} src={props.img[1].original} alt="IMG1"/>
                    </div>
                </div>
            ))}
            <Footer/>
        </div>
    )
}

export default GreenCard;