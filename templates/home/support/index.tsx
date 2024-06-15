import React from "react";
import styles from "./index.module.scss";
import arrowLeft from "@/assets/svg/arrow-left.svg";
import supportImg from "@/assets/svg/support_image.svg";
import Image from "next/image";

const Support = () => {
  const support_list = [
    {
      img: supportImg,
      number: "80%",
      text: "of suppliers adhere to sustainability requirements",
      info: "The global supply chain for consumer electronics involves many stages, often with poor environmental practices, from the initial production stage to the final consumer.",
    },
    {
      img: supportImg,
      number: "30,000+",
      text: "eco-friendly devices sold",
      info: "The global supply chain for consumer electronics involves many stages, often with poor environmental practices, from the initial production stage to the final consumer.",
    },
    {
      img: supportImg,
      number: "2,000+",
      text: "devices responsibly recycled",
      info: "The global supply chain for consumer electronics involves many stages, often with poor environmental practices, from the initial production stage to the final consumer.",
    },
    {
      img: supportImg,
      number: "2,400t",
      text: "of e-waste saved from landfills",
      info: "The global supply chain for consumer electronics involves many stages, often with poor environmental practices, from the initial production stage to the final consumer.",
    },
  ];

  return (
    <section className={styles.support_section}>
      <div className="container">
        <div className={styles.heading}>
          <h3>Building a happier, healthier, and more equitable world.</h3>
        </div>
        <div className={styles.support_lists_desktop}>
          <div className={styles.support_text}>
            {support_list.map((support, index) => (
              <div key={index}>
                <div>
                  <h4>{support.number}</h4>
                </div>
                <div>
                  <p>{support.text}</p>
                </div>
                <div className={styles.active_arrow}>
                  <Image
                    src={arrowLeft}
                    alt="arrowLeft"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.support_img}>
            <Image src={supportImg} alt="supportImg" />
            <p>
              The global supply chain for consumer electronics involves many
              stages, often with poor environmental practices, from the initial
              production stage to the final consumer.
            </p>
          </div>
        </div>
        <div className={styles.support_lists_mobile}>
          {support_list.map((support, index) => (
            <div key={index}>
              <div className={styles.support_img}>
                <Image src={support.img} alt="supportImg" />
                <p>
                  The global supply chain for consumer electronics involves many
                  stages, often with poor environmental practices, from the
                  initial production stage to the final consumer.
                </p>
              </div>
              <div className={styles.support_text}>
                <div>
                  <h4>{support.number}</h4>
                  <p>{support.text}</p>
                </div>
                <div>
                  <div className={styles.active_arrow}>
                    <Image
                      src={arrowLeft}
                      alt="arrowLeft"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
