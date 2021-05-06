import MESA from '../image/mesa.svg';
import SILLA from '../image/silla.svg';

import AboutMeJSON from '../json/AboutMeJSON.json'

import SM1 from '../image/Layer2.svg';
import SM2 from '../image/Layer-1.svg';
import SM3 from '../image/Layer-2.svg';

const AboutMe = (props:any) => {
    return(
        <div className="class-aboutUs">
            {AboutMeJSON.AboutMeJSON.map((props) =>
                <>
                    <div></div>
                    <div>
                        <div>
                            <div>
                                <strong>{props.myName}</strong>
                                {props.infoAboutMe.map((propp,i) => <p key={i}>{propp}</p>)}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>{props.titleExperience}</h2>
                                {props.dataExperience.map((propp,i) => 
                                    <div className="class-experienceDetail" key={i}>
                                        <div/>
                                        <h4>{propp.nameJob}</h4>
                                        <b>{propp.dateStart} – {propp.dateEnd}</b>
                                        {propp.detailJob.map((proppp) => <p>- {proppp}</p>)}
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2>{props.titleEducation}</h2>
                                {props.detailEducation.map((propp) => <p>{propp}</p>)}

                                <h2>Contact</h2>
                                <p>dulceguzmantaveras@gmail.com</p>
                                <div>
                                    <img src={SM1} alt="SM1"/>
                                    <img src={SM2} alt="SM2"/>
                                    <img src={SM3} alt="SM3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="class-animacion-0"/>
                        <img src={MESA} alt="MESA"/>
                        <img src={SILLA} alt="MESA"/>
                    </div>
                </>
            )}
        </div>
    )
}

export default AboutMe;