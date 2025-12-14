import "./styles/About.css";
import { config } from "../config";

const About = () => {
  const lines = config.about.description
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <section className="about-section" id="about">
      <div className="about-me">
        <h3>{config.about.title}</h3>

        <div className="about-text">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
