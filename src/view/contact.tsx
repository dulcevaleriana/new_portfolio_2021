import {Link} from "react-router-dom";
import MESA from '../image/mesa.svg';

const contact = (props:any) => {
    return(
        <div className="class-contact">
            <div></div>
            <div>
                <p>Contact</p>
                <h2>Connect whit me !</h2>
                <input type="text" id="fname" name="fname" placeholder="Name"/>
                <input type="email" id="femail" name="femail" placeholder="Email"/>
                <input type="text" id="fsubject" name="fsubject" placeholder="Subject"/>
                <textarea id="fmessage" name="Message">
                    Message
                </textarea>
                <Link to="/contact">
                    <button>
                        Contact me
                    </button>
                </Link>
            </div>
            <div>
                <div className="class-aperson-sit"/>
                <img src={MESA} alt="MESA"/>
            </div>
        </div>
    )
}

export default contact;