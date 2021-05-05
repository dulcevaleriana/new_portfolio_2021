import JSONUnicef from '../json/Unicef.json';
import Footer from '../component/Footer';
import NextPage from '../component/NextPage';

import IMG7 from '../image/Image3.png';
import IMG8 from '../image/Image2.png';
import IMG9 from '../image/Image1.png';

const Unicef = (props:any) => {
    return(
        <div className="class-Unicef">
            <h2>About Unicef</h2>
            {JSONUnicef.JSONUnicef.map((props, i) => (
                <div key={i}>
                    <div>
                        {props.info.map((data,i) => <p key={i}>{data}</p>)}
                    </div>
                    <div>
                        {props.img.map((img,i) => <img key={i} src={img} alt="IMG1"/>)}
                    </div>
                </div>
            ))}
            <NextPage
                IMG_A={IMG7}
                IMG_B={IMG8}
                IMG_C={IMG9}
                onClick={props.onClick}
                namePage="My Portfolio Evolution >>"
            />
            <Footer/>
        </div>
    )
}

export default Unicef;