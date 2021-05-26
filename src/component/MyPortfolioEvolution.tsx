import JSONMyPortfolioEvolution from '../json/MyPortfolioEvolution.json';
import Footer from '../component/Footer';
import NextPage from '../component/NextPage';
import ImageGallery from 'react-image-gallery';

import IMG4 from '../image/Image6.png';
import IMG5 from '../image/Image5.png';
import IMG6 from '../image/Image4.png';

const MyPortfolioEvolution = (props:any) => {

    return(
        <div className="class-MyPortfolioEvolution">
            <NextPage
                IMG_A={IMG4}
                IMG_B={IMG5}
                IMG_C={IMG6}
                onClick={props.onClick}
                linkGitHub="https://github.com/dulcevaleriana/new_portfolio_2021"
                linkProyect="http://dulcevaleriana.net/"
                namePage="Green Card"
            />
            {JSONMyPortfolioEvolution.JSONMyPortfolioEvolution.map((props, i) => (
                <div key={i}>
                    <h2>{props.title}</h2>
                    <div>
                        {props.info.map((data,i) => <p key={i}>{data}</p>)}
                    </div>
                    <div>
                        <ImageGallery items={props.img} />
                    </div>
                </div>
            ))}
            <Footer/>
        </div>
    )
}

export default MyPortfolioEvolution;