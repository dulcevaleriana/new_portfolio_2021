// import PERSON_SIT from '../image/Group455.svg';
import MESA from '../image/mesa.svg';

const portfolio = (props:any) => {
    return(
        <div className="class-portfolio">
            <div></div>
            <div>
                TXT
            </div>
            <div>
                {/* <img src={PERSON_SIT} alt="PERSON"/> */}
                <div className="class-aperson-sit"/>
                <img src={MESA} alt="MESA"/>
            </div>
        </div>
    )
}

export default portfolio;