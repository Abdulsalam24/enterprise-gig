import Nav from "@/components/ui/nav";
import React from "react";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      <Nav />
      <div className={styles.hero_section}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/917707355589300988/TEAM/49d7/767c/-bea7-40d2-a72e-d6a4674fccb8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Te-sUqw7cuYr1~3cJHPFlg-1BZseI2mUCV4lt3Fo~dUq1f7QYoOw01ZeaRE5CS3atzBk2cUYtMERYaXlMjBEMiV57XRLJdnUfBqueQ7Dp4C6m~PWKnoR43JeYzq-e~WUentOJpunxfoZAFeFPXLcRjrVGnCTRG9n8EgiUD7jlDHupHu6lMgOyDYKYWSYnfh3VrBgtpte5h67De7IqE7HX5p5HAauvMsLvgpj1efo-yTzURziIVrS2nLYI6eBI3SxMjBhZUxXP2PrlXNHIVUPlS-bdXh7cUOKXXBWjoAPcNw4wL8LeU3uCVacsWJK0TPxGlrLqfR9pOZkY4~~k3EY1Q__"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.content}>
        <div>
          <h1>Powering Businesses, Protecting the Planet.</h1>
          <p>
            We are committed to protecting the planet by
            providing affordable office IT Hardware and engaging in sustainable
            business practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
