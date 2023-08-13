import logo from "../Assets/900px-STC_line_A_icon.png";
export default () => {
  return (
    <header>
      <div>
        <img src={logo} className="logoCon" />
      </div>
      <div className="Navbar">
        <ul>
          <li>
            <a href="#profile">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#project">Case Study</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#profile">Contact Me</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
