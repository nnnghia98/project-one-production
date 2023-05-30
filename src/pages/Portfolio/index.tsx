import {
  PortfolioWelcomeBanner,
  AboutMe,
  Experiences,
  Projects,
  Hobbies,
} from "components/index";

import "./styles.scss";

const Portfolio = () => (
  <div className="portfolio">
    <PortfolioWelcomeBanner />
    <AboutMe />
    <Experiences />
    <Projects />
    <Hobbies />
  </div>
);

export default Portfolio;
