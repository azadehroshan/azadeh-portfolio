import pic from "../Assets/azadeh-porf-pic.jpg";
import linkedin from "../Assets/linkedin.svg";
import github from "../Assets/github.svg";
import arrowline from "../Assets/ArrowLineDown.svg";
import whatsapp from "../Assets/WhatsappLogo.svg";
export default () => {
  return (
    <section className="details" id="profile">
      <div className="links">
        <p>👋Hello</p>
        <h1>Azadeh Roshanbakhsh-Ghanbari(she/her)</h1>
        <span>Fullstack Developer</span>
        <div className="icons">
          <a href="https://www.linkedin.com/in/azadeh-rgb/" target="_blank">
            <img src={linkedin} />
          </a>
          <a href="https://github.com/azadehroshan" target="_blank">
            <img src={github} />
          </a>
        </div>
      </div>
      <div className="MyImage">
        <div className="profileBackground">
          <img src={pic} />
        </div>
      </div>
      <div className="Cv">
        <a
          className="cv-btn"
          href="https://drive.google.com/file/d/1JSAyZ2ckJGT556_lDmriEpUyWAl1oJW9/view?usp=drive_link"
          target="_blank"
        >
          <p>Download Cv</p>
          <img src={arrowline} alt="arrowlineimg" />
        </a>
        <a className="profile-btn">
          <img src={whatsapp} alt="whatsappimg" />
          <p>WhatsApp</p>
        </a>
      </div>
    </section>
  );
};
