import React from "react";
import Hero from "./hero";
import styles from "./index.module.scss";
import SponsorLogo from "./sponsor_logo";
import Shop from "./shop";
import HowItWorks from "./how_it_works";
import Support from "./support";
import Certification from "./certification";
import Publication from "./publication";
import GetStarted from "./get_started";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <SponsorLogo />
      <Shop />
      <HowItWorks />
      <Support />
      <div className="container">
        <Certification />
        <Publication />
      </div>
      <GetStarted />
    </section>
  );
};

export default Home;
