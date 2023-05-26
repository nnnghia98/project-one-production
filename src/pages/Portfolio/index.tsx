import { WelcomeBanner, AboutMe, Experiences } from "components/index";

import "./styles.scss";

const Portfolio = () => (
  <div className="portfolio">
    <WelcomeBanner />
    <AboutMe />
    <Experiences />
  </div>
);

export default Portfolio;
