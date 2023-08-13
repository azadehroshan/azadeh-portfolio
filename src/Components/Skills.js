import CSS from "../Assets/css.svg";
import HTML5 from "../Assets/HTML5.svg";
import JS from "../Assets/js.svg";
import GIT from "../Assets/git.svg";
import NODEJS from "../Assets/nodejs.svg";
import POSTGRESSQL from "../Assets/postgresqlsvg.svg";
import REACT from "../Assets/react.svg";
import WORDPRESS from "../Assets/wordpress.svg";
import GITHUB from "../Assets/git.svg";
export default () => {
  return (
    <section className="skill" id="skills">
      <h4> Skills</h4>
      <div className="iconsHolder">
        <p>Backend Skills</p>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NlXPcDtzqYfFplGKTkVwDLnquG-CT34eH2JI1wAX_GA5tHEGjLmUtdd8U1zD8S9CX38&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_CAww3As7VJKXvecM4ymfw4Xo0H-q62oSzkX-DL1cJn_aVTdBqBxrTTm2ase64lnJn8&usqp=CAU" />
        </div>
      </div>
      <div className="iconsHolder">
        <p>Frontend Skills</p>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPRMXlCdiWMbL9HYZi63jl_zwHxPc37QXs4zzkPQWRp4zvnJ18b_jW-unrL1Xbez0Tz4&usqp=CAU" />
        </div>
      </div>
    </section>
  );
};
