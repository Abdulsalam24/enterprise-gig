import React from "react";
import styles from "./index.module.scss";
import supportImg from "@/assets/svg/support_image.svg";
import Image from "next/image";
import greener_future from "@/assets/svg/greener_future.svg";

const GetStarted = () => {
  return (
    <section className={styles.get_started}>
      <div className={styles.container}>
        <div>
          <h3>Join us in our journey towards a greener future.</h3>
          <p>
            Together, we can create a world where environmental sustainability
            is not just a goal but a way of life.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <Image src={greener_future} alt="greener_future" />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
