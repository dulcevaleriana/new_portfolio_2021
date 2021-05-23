import JSONUnicef from '../json/Unicef.json';
import Footer from '../component/Footer';
import NextPage from '../component/NextPage';
import GalleryScroll from '../component/GalleryScroll';

import useMediaQuery from "../js/jsMediaQuery";

import IMG7 from '../image/Image3.png';
import IMG8 from '../image/Image2.png';
import IMG9 from '../image/Image1.png';

const Unicef = (props:any) => {

    let isPageAvaible = useMediaQuery("(max-width: 1025px)");
    const loadImage = (imageName:any) => (require(`../image/unicef/${imageName}`).default);

    return(
        <div className="class-Unicef">
            <NextPage
                IMG_A={IMG7}
                IMG_B={IMG8}
                IMG_C={IMG9}
                onClick={props.onClick}
                titleGitHub="Comming Soon"
                tittleProject="Comming Soon"
                namePage="My Portfolio Evolution"
            />
            <h2>About Unicef</h2>
            {JSONUnicef.JSONUnicef.map((props, i) => (
                <>
                {isPageAvaible &&
                    <GalleryScroll nameMap={props.img} folderName={"unicef"}/>
                }
                <div key={i}>
                    <div>
                        {props.info.map((data,i) => <p key={i}>{data}</p>)}
                    </div>
                    <div>
                    <img key={i} src={loadImage(props.img[0])} alt="IMG1"/>
                    <img key={i} src={loadImage(props.img[1])} alt="IMG1"/>
                    <img key={i} src={loadImage(props.img[2])} alt="IMG1"/>
                    </div>
                </div>
                </>
            ))}
            <Footer/>
        </div>
    )
}

export default Unicef;