import {
  WelcomeBanner,
  AboutMe,
  Experiences,
  Projects,
  Hobbies,
} from "components/index";

import "./styles.scss";

const Portfolio = () => (
  <div className="portfolio">
    <WelcomeBanner />
    <AboutMe />
    <Experiences />
    <Projects />
    <Hobbies />
  </div>
);

export default Portfolio;
