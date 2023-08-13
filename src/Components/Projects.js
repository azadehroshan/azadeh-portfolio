import CodeIcon from "../Assets/CodeIcon.svg";
import Uiicon from "../Assets/UiIcon.svg";
import UIdesign from "../Assets/DesignIcon.svg";
import Isotope from "isotope-layout";
import React from "react";
import Frontend from "../Assets/fr.png";
import Backend from "../Assets/ba.png";
import UI from "../Assets/UIpng.png";

export default () => {
  const isotope = React.useRef();
  const [filterKey, setFilterKey] = React.useState("*");
  const items = [
    {
      title: "Tv show project",
      description:
        "Experience the power of dynamic web entertainment with our cutting-edge JavaScript TV project. visuals and interactive content, all brought to life through the versatility of JavaScript. Elevate your TV viewing experience like never before, as we redefine entertainment through of modern web technology.",
      tags: ["JavaScript", "HTML", "CSS"],
      sourceImg: Frontend,
      classList: ["frontend", "backend"],
      link: "https://cyf-azadehroshan-tv.netlify.app/",
    },
    {
      title: "Hotel CYF",
      description:
        "Welcome to the CYF Hotel, where React takes your stay to the next level! Unwind in style as our user-friendly interface lets you effortlessly browse rooms, book with a click, and experience seamless navigation. Elevate your hotel booking journey with the modern touch of React technology.",
      tags: ["React", "CSS"],
      sourceImg: Backend,
      classList: ["backend"],
      link: "https://cyf-hotel-azadeh.netlify.app/",
    },
    {
      title: "ARYA TOOT",
      description:
        "TOOT project enhancing a critical aspect of communicating Code Your Future between mentors and students. With the implementation of the Open AI (Chat GPT) API to TooT project, the web app creates written interaction for people with receiving suggestions and corrections words / sentences.",
      tags: ["React", "HTML", "NodeJS"],
      sourceImg: UI,
      classList: ["ui", "frontend", "za"],
      link: "https://starter-kit-t4sq.onrender.com/",
    },
  ];

  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <section className="projects" id="project">
      <div className="top">
        <div className="linkedIn">
          <a>🔗 LinkedIn</a>
          <h5>My Projects</h5>
        </div>
        <div className="buttons">
          <button onClick={handleFilterKeyChange("*")}>
            <img src={CodeIcon} />
            <span>All Projects</span>
          </button>
          <button onClick={handleFilterKeyChange("backend")}>
            <img src={CodeIcon} />
            <span>Backend</span>
          </button>
          <button onClick={handleFilterKeyChange("frontend")}>
            <img src={Uiicon} />
            <span>Frontend</span>
          </button>
          <button onClick={handleFilterKeyChange("ui")}>
            <img src={UIdesign} />
            <span>UI design</span>
          </button>
        </div>
      </div>

      <div style={{ color: "#fff" }} className="bottom">
        <ul className="filter-container">
          {items.map((item) => (
            <a href={item.link} target="_blank">
              <li className={"filter-item " + item.classList.join(" ")}>
                <div className="item">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="tag">
                    {item.tags.map((tag) => (
                      <span>{tag}</span>
                    ))}
                  </div>
                  <div className="image">
                    <img style={{ height: "160px" }} src={item.sourceImg} />
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};
