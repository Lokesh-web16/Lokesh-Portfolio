import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  return (
    <section className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career & <span>experience</span>
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {config.experiences.map((exp, index) => {
            const isPresent = exp.period.toLowerCase().includes("present");

            return (
              <div className="career-info-box" key={index}>
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                  </div>

                  <h3>{isPresent ? "SEPT 2024 - PRESENT" : exp.period}</h3>
                </div>

                <p>{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
