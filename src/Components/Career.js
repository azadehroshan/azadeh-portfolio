import codeIcon from "../Assets/CodeIcon.svg";
import designIcon from "../Assets/DesignIcon.svg";
import projectIcon from "../Assets/ProjectsIcon.svg";

export default () => {
  return (
    <section className="jobs">
      <div className="roles-container">
        <div className="top">
          <div>
            <img src={codeIcon} />
            <span>Junior</span>
            <h5>Developer</h5>
          </div>
          <div>
            <img src={designIcon} />
            <span>Junior</span>
            <h5>Digital Marketer </h5>
          </div>
          <div>
            <img src={projectIcon} />
            <span>Junior</span>
            <h5>SEO </h5>
          </div>
        </div>
        <div className="bottom">
          <div>
            <span>xxx</span>
            <h3> Fullstack</h3>
          </div>
          <div>
            <span>DIgital </span>
            <h3>Google Analytics</h3>
          </div>
          <div>
            <span>xxx</span>
            <h3> Content Creator </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
