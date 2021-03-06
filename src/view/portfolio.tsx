import React, { useState } from 'react';

import MyPortfolioEvolution from '../component/MyPortfolioEvolution';
import GreenCard from '../component/GreenCard';
import Unicef from '../component/Unicef';

import IMG1 from '../image/Web1920–6.png';
import IMG2 from '../image/Web1920–2.png';
import IMG3 from '../image/Web1920–1.png';
import IMG4 from '../image/Image6.png';
import IMG5 from '../image/Image5.png';
import IMG6 from '../image/Image4.png';
import IMG7 from '../image/Image3.png';
import IMG8 from '../image/Image2.png';
import IMG9 from '../image/Image1.png';

import JSONMyPortfolioEvolution from '../json/MyPortfolioEvolution.json';
import JSONGreenCard from '../json/GreenCard.json';
import JSONUnicef from '../json/Unicef.json';

import MESA from '../image/mesa.svg';

const Portfolio = (props:any) => {
    const [menuBase, setMenuBase] = useState(true);

    const [viewPage1, setPage1] = useState(true);
    const [viewPage2, setPage2] = useState(false);
    const [viewPage3, setPage3] = useState(false);

    let ClassElementActive = 'active';

    const selectThis1 = () =>{
        setPage1(true);
        setPage2(false);
        setPage3(false);
    }

    const selectThis2 = () =>{
        setPage1(false);
        setPage2(true);
        setPage3(false);
    }

    const selectThis3 = () =>{
        setPage1(false);
        setPage2(false);
        setPage3(true);
    }

    return(
        <div className="class-portfolio">
            <div></div>
            <div>
                <div>
                    {menuBase ? (
                        <p>Portfolio</p>
                    ):
                    (
                        <>
                        {viewPage1 &&
                        <p><strong onClick={() => setMenuBase(true)}>Portfolio -- </strong> <span>My Portfolio Evolution</span></p>
                        }
                        {viewPage2 &&
                        <p><strong onClick={() => setMenuBase(true)}>Portfolio -- </strong> <span>Green Card</span></p>
                        }
                        {viewPage3 &&
                        <p><strong onClick={() => setMenuBase(true)}>Portfolio -- </strong> <span>Unicef</span></p>
                        }
                        </>
                    )}
                    
                    {viewPage1 &&
                    <>
                    <h2>My Portfolio Evolution</h2>
                    {menuBase &&
                        <>
                        <p>{JSONMyPortfolioEvolution.JSONMyPortfolioEvolution[0].info[0]}</p>
                        <button onClick={() => setMenuBase(false)}>See More</button>
                        </>
                    }
                    </>
                    }
                    {viewPage2 &&
                    <>
                    <h2>Green Card</h2>
                    {menuBase &&
                        <>
                        <p>{JSONGreenCard.JSONGreenCard[0].info[0]}</p>
                        <button onClick={() => setMenuBase(false)}>See More</button>
                        </>
                    }
                    </>
                    }
                    {viewPage3 &&
                    <>
                    <h2>Unicef</h2>
                    {menuBase &&
                        <>
                        <p>{JSONUnicef.JSONUnicef[0].info[0]}</p>
                        <button onClick={() => setMenuBase(false)}>See More</button>
                        </>
                    }
                    </>
                    }
                </div>
                {menuBase ? (
                    <>
                <div>
                    <div className={`${viewPage1 ? ClassElementActive : ""} class-button-dropdown`} onClick={() => selectThis1()}/>
                    <div className={`${viewPage2 ? ClassElementActive : ""} class-button-dropdown`} onClick={() => selectThis2()}/>
                    <div className={`${viewPage3 ? ClassElementActive : ""} class-button-dropdown`} onClick={() => selectThis3()}/>
                </div>
                {viewPage1 &&
                <div onClick={() => setMenuBase(false)}>
                    <img src={IMG9} alt="IMG1"/>
                    <img src={IMG8} alt="IMG1"/>
                    <img src={IMG7} alt="IMG1"/>
                </div>
                }
                {viewPage2 &&
                <div onClick={() => setMenuBase(false)}>
                    <img src={IMG6} alt="IMG1"/>
                    <img src={IMG5} alt="IMG1"/>
                    <img src={IMG4} alt="IMG1"/>
                </div>
                }
                {viewPage3 &&
                <div onClick={() => setMenuBase(false)}>
                    <img src={IMG1} alt="IMG1"/>
                    <img src={IMG2} alt="IMG1"/>
                    <img src={IMG3} alt="IMG1"/>
                </div>
                }
                    </>
                )
                :
                (
                    <div className="class-PortfolioDetails">
                        {viewPage1 &&
                            <MyPortfolioEvolution onClick={() => selectThis2()}/>
                        }
                        {viewPage2 &&
                            <GreenCard onClick={() => selectThis3()}/>
                        }
                        {viewPage3 &&
                            <Unicef onClick={() => selectThis1()}/>
                        }
                    </div>
                )}

            </div>
            {menuBase &&
            <div>
                <div className="class-aperson-sit"/>
                <img src={MESA} alt="MESA"/>
            </div>
            }
        </div>
    )
}

export default Portfolio;