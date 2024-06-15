import React from "react";
import styles from "./index.module.scss";
import shop1 from "@/assets/svg/shop_1.svg";
import shop2 from "@/assets/svg/shop_2.svg";
import shop3 from "@/assets/svg/shop_3.svg";
import shop4 from "@/assets/svg/shop_4.svg";
import Image from "next/image";

const Shop = () => {
  const shopList = [
    {
      img: shop1,
    },
    {
      heading: "Resource Depletion",
      text: "Making consumer electronics uses limited resources, including rare earth metals and other important minerals. Continuous extraction without recycling harms the environment and depletes natural reserves.",
    },
    {
      img: shop2,
    },
    {
      heading: "Energy Consumption",
      text: "Manufacturing, shipping, and using electronic devices involve a lot of energy consumption and carbon emissions, which cause several environmental problems directly related to their use.",
    },
    {
      heading: "E-Waste Management",
      text: "The rapid release of new electronic devices is aiding e-waste, and it is expected to reach 120 million tons from about 60 million by 2050. Currently, only about 17% of this waste is properly recycled.",
    },
    {
      img: shop3,
    },
    {
      img: shop4,
    },
    {
      heading: "Supply Chain Impacts",
      text: "The global supply chain for consumer electronics involves many stages, often with poor environmental practices, from the initial production stage to the final consumer.",
    },
  ];

  return (
    <section className={styles.shop_section}>
      <div className="container">
        <div className={styles.heading}>
          <h3>
            There are several interconnected issues threatening the environment
            and hindering global sustainability, and addressing them requires a
            global effort.
          </h3>
        </div>

        <div className={styles.shop_list}>
          {shopList.map((item, index) => (
            <div key={index} className={styles.shop_img}>
              {item.img ? <Image src={item.img} alt="shop_img" /> : ""}
              <div className={styles.shop_text}>
                <h4>{item.heading}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
