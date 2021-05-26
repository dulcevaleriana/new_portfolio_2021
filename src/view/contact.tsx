import MESA from '../image/mesa.svg';
import emailjs from 'emailjs-com';

const contact = (props:any) => {

    function sendEmail(e:any) {
        e.preventDefault();
    
        emailjs.sendForm('service_DulceValeriana', 'template_DulceTemplate', e.target, 'user_R00U7G8Q3075JHonYE7al')
          .then((result) => {
              alert("You're message was send!! ")
          }, (error) => {
              alert(error.message)
          });
          e.target.reset();
      }

    return(
        <div className="class-contact">
            <div></div>
            <form onSubmit={sendEmail}>
                <p>Contact</p>
                <h2>Connect with me !</h2>
                <input type="text" id="fname" name="from_name" placeholder="Name"/>
                <input type="email" id="femail" name="from_email" placeholder="Email"/>
                <input type="text" id="fsubject" name="from_subject" placeholder="Subject"/>
                <textarea id="fmessage" name="message">
                    Message
                </textarea>
                <button>Contact me</button>
            </form>
            <div>
                <div className="class-aperson-sit"/>
                <img src={MESA} alt="MESA"/>
            </div>
        </div>
    )
}

export default contact;