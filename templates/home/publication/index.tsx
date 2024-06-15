import React from "react";
import styles from "./index.module.scss";
import publication1 from "@/assets/svg/publication_img.svg";
import Image from "next/image";

const Publication = () => {
  const shopList = [
    {
      img: publication1,
      heading: "Resource Depletion",
      text: "Extend the lifespan of electronic devices by repairing them instead of replacing them when possible.",
      cta: "Read more",
    },
    {
      img: publication1,
      heading: "Resource Depletion",
      text: "Extend the lifespan of electronic devices by repairing them instead of replacing them when possible.",
      cta: "Read more",
    },
    {
      img: publication1,
      heading: "Resource Depletion",
      text: "Extend the lifespan of electronic devices by repairing them instead of replacing them when possible.",
      cta: "Read more",
    },
    {
      img: publication1,
      heading: "Resource Depletion",
      text: "Extend the lifespan of electronic devices by repairing them instead of replacing them when possible.",
      cta: "Read more",
    },
  ];

  return (
    <section className={styles.publication_section}>
      <div className={styles.heading}>
        <h3>Stay updated on our latest publications</h3>
      </div>
      <div className={styles.carousel}>
        {shopList.map((item, index) => (
          <div key={index} className={styles.carousel_item}>
            <Image src={item.img} alt="shop_img" />
            <div>
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
              <a href="">{item.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publication;
