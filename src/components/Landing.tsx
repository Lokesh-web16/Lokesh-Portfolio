import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <section className="landing-section" id="home">
      {/* Background glows used by Landing.css */}
      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="nav-fade" />

      <div className="landing-container">
        {/* Left side: greeting + name */}
        <div className="landing-intro">
          <h2>Hello! I&apos;m</h2>
          <h1>
            {firstName}
            {lastName ? ` ${lastName}` : ""}
          </h1>
        </div>

        {/* Center: 3D character (passed from MainContainer) */}
        {children}

        {/* Right side: FIXED (no overlap) */}
        <div className="landing-info">
          <h3>A Creative</h3>
          <h2 className="landing-info-h2">DEVELOPER</h2>
        </div>
      </div>
    </section>
  );
};

export default Landing;
