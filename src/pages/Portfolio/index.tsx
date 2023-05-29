import {
  WelcomeBanner,
  AboutMe,
  Experiences,
  Projects,
} from "components/index";

import "./styles.scss";

const Portfolio = () => (
  <div className="portfolio">
    <WelcomeBanner />
    <AboutMe />
    <Experiences />
    <Projects />
  </div>
);

export default Portfolio;
