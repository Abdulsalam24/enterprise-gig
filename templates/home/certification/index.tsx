import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import r2 from "@/assets/svg/r2.svg";
import certificate from "@/assets/svg/certifcate_img.svg";
import certificate2 from "@/assets/svg/certifcate_img2.svg";

const Certification = () => {
  return (
    <section className={styles.certifcation}>
      <Image src={certificate} alt="certificate" />
      <div className={styles.certifcation_text}>
        <Image src={r2} alt="r2" />
        <h3>Responsible Recycling (R2) Certification</h3>
        <p>
          Our R2 certification signifies our unwavering commitment to
          sustainable electronics recycling. With R2 standards at the core of
          our operations, we ensure ethical practices that minimize
          environmental impact and promote a greener future for generations to
          come
        </p>
      </div>
      <Image src={certificate2} alt="certificate2" />
    </section>
  );
};

export default Certification;
