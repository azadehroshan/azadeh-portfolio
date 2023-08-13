 import profile from "../Assets/profile.svg"
export default () => {
  return (
    <section className="about">
      <div className="left">
        <img src={profile} />
      </div>

      <div className="right">
        <p className="name"> 🧐 I’m Azadeh (Ah-zah-deh)</p>
        <h3> Washington Henrique Fernandes de Sousa</h3>
        <p className="intro">
          👋 A digital marketing professional with MBA in Marketing and
          Bachelor’s Degree in Industrial and Organisational Psychology. I have
          previous experience with digital marketing strategy, online campaigns,
          social media, calls-to-action, email marketing, KeyWord Planning, SEO,
          PPC, as well as integrating and automating marketing campaigns using
          Google Analytics, CRM and company databases. I have strong core skills
          in Microsoft Office including Office 365. Most recently, after moving
          to the UK, I have been honing my technical skills in web development
          through education and volunteer work. I’ve gained skills in HTML, CSS,
          JavaScript, Node.js, React, Postgres SQL, Git, Trello, Canva, FIGMA
          and Agile methodologies.
        </p>
      </div>
    </section>
  );
};
