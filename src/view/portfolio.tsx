import React, { useState } from 'react';
import MESA from '../image/mesa.svg';

const Portfolio = (props:any) => {
    const [viewPage1, setPage1] = useState(true);
    const [viewPage2, setPage2] = useState(false);
    const [viewPage3, setPage3] = useState(false);

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
                    <p>Portfolio</p>
                    {viewPage1 &&
                    <h2>1</h2>
                    }
                    {viewPage2 &&
                    <h2>2</h2>
                    }
                    {viewPage3 &&
                    <h2>3</h2>
                    }
                </div>
                <div>
                    <div onClick={() => selectThis1()}/>
                    <div onClick={() => selectThis2()}/>
                    <div onClick={() => selectThis3()}/>
                </div>
                {viewPage1 &&
                <div>
1
                </div>
                }
                {viewPage2 &&
                <div>
2
                </div>
                }
                {viewPage3 &&
                <div>
3
                </div>
                }
            </div>
            <div>
                <div className="class-aperson-sit"/>
                <img src={MESA} alt="MESA"/>
            </div>
        </div>
    )
}

export default Portfolio;