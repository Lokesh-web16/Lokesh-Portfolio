import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const section = element.getAttribute("data-href");
          if (section && lenis) {
            const target = document.querySelector(section) as HTMLElement | null;
            if (target) lenis.scrollTo(target, { offset: 0, duration: 1.5 });
          }
        }
      });
    });

    window.addEventListener("resize", () => lenis?.resize());
    return () => lenis?.destroy();
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (lenis) {
      lenis.start();
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="header header-glass">
        <div className="header-inner">
          <a
            className="brand"
            href="#landingDiv"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span className="brand-name">{config.developer.fullName}</span>
          </a>

          <div className="header-center">
            <span className="status-dot" />
            <span className="status-text">{config.developer.title}</span>
          </div>

          <nav className="nav">
            <ul>
              <li>
                <a data-href="#about" href="#about">
                  ABOUT
                </a>
              </li>

              <li>
                <a data-href="#career" href="#career">
                  EXPERIENCE
                </a>
              </li>

              <li>
                <a data-href="#work" href="#work">
                  PROJECTS
                </a>
              </li>

              <li>
                <a data-href="#contact" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
 