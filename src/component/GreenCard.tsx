import JSONGreenCard from '../json/GreenCard.json';
import Footer from '../component/Footer';
import NextPage from '../component/NextPage';
import GalleryScroll from '../component/GalleryScroll';

import useMediaQuery from "../js/jsMediaQuery";

import IMG1 from '../image/Web1920–6.png';
import IMG2 from '../image/Web1920–2.png';
import IMG3 from '../image/Web1920–1.png';

const GreenCard = (props:any) => {

    let isPageAvaible = useMediaQuery("(max-width: 1025px)");

    return(
        <div className="class-GreenCard">
            <h2>About Green Card</h2>
            {JSONGreenCard.JSONGreenCard.map((props, i) => (
                <>
                { isPageAvaible &&
                    <GalleryScroll nameMap={props.img}/>
                }
                <div key={i}>
                    <div>
                        {props.info.map((data,i) => <p key={i}>{data}</p>)}
                    </div>
                    <div>
                        {props.img.map((img,i) => <img key={i} src={img} alt="IMG1"/>)}
                    </div>
                </div>
                </>
            ))}
            <NextPage
                IMG_A={IMG1}
                IMG_B={IMG2}
                IMG_C={IMG3}
                onClick={props.onClick}
                namePage="Unicef >>"
            />
            <Footer/>
        </div>
    )
}

export default GreenCard;