import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
const JobExpriences = () => {
  const professionalHistory = [
    {
      title: "Talented Women Mentor (Volunteer)",
      companyName: "BuzzStart Academy",
      discription: `* Selected by Founder of the Academy to mentor talented women
                  clients in Northwest UK * Provided guidance and supported to
                  set goals, objectives and KPI’s for their case studies
                  *Diagnosed consumer journey marketing channels and tools for
                  improving outcomes, including SEO optimisation for web and
                  landing page publication Made recommendations for further
                  educational modules`,
      location: " Manchester, UK",
      date: "Jan 2022 – Apr 2022 ",
    },
    {
      title: "Tawdawdawd",
      companyName: "BuzzStart Academy",
      discription: `* Selected by Founder of the Academy to mentor talented women
                  clients in Northwest UK * Provided guidance and supported to
                  set goals, objectives and KPI’s for their case studies
                  *Diagnosed consumer journey marketing channels and tools for
                  improving outcomes, including SEO optimisation for web and
                  landing page publication Made recommendations for further
                  educational modules`,
      location: " Manchester, UK",
      date: "Jan 2022 – Apr 2045",
    },
  ];

  const acodemyHistory = [
    {
      title: "Full Stack Development Certification",
      companyName: "Code Your Future",
      discription: `* Boosting self-confidence and resilience within working individual projects and team working
* Experience in HTML, CSS, JavaScript, React, Node.js, and SQL was my achievement. In the tech industry`,
      location: " Manchester, UK",
      date: "  Feb 2022 – Apr 2023",
    },
  ];

  return (
    <section className="job-ex">
      <div className="professional">
        <h4>PROFESSIONAL EXPERIENCE</h4>
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            height: "500px",
          }}
        >
          {professionalHistory.map((item) => (
            <SplideSlide className="professional-item">
              <div className="pro-top">
                <h5>{item.title}</h5>
                <h6>{item.companyName}</h6>
                <p>{item.discription}</p>
              </div>
              <div className="pro-bot">
                <p>{item.location}</p>
                <p>{item.date}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="academy">
        <h4>EDUCATION</h4>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            autoplay: true,
            direction: "ttb",
            height: "500px",
          }}
        >
          {acodemyHistory.map((item) => (
            <SplideSlide className="acodemy-item">
              <div className="pro-top">
                <h5>{item.title}</h5>
                <h6>{item.companyName}</h6>
                <p>{item.discription}</p>
              </div>
              <div className="pro-bot">
                <p>{item.location}</p>
                <p>{item.date}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};
export default JobExpriences;
