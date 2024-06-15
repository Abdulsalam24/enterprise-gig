import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import battery_recycle from "@/assets/svg/battery_recycle.svg";
import earth_filled from "@/assets/svg/earth-fill.svg";
import game_icons from "@/assets/svg/game_icons.svg";
import charity from "@/assets/svg/charity.svg";
import person_support from "@/assets/svg/person_support.svg";
import recycle from "@/assets/svg/recycle.svg";

const HowItWorks = () => {
  const workList = [
    {
      src: earth_filled,
      heading: "Conscious Sourcing",
      text: "Sourcing sustainably made new devices as well as functional refurbished or used devices for sale",
    },
    {
      src: recycle,
      heading: "Eco-Friendly Packaging",
      text: "Utilizing eco-friendly packaging materials for shipments and prioritizing low-carbon shipping methods",
    },
    {
      src: person_support,
      heading: "Product Support",
      text: "Offering complimentary product support to extend the lifespan of devices for their new owners",
    },
    {
      src: game_icons,
      heading: "Trade-In Rewards",
      text: "Offering rewards that can be redeemed for purchases to promote responsible recycling through our trade-in initiative",
    },
    {
      src: charity,
      heading: "Certified Partners",
      text: "Partnering with certified refurbishers and recyclers to give old devices a new life which reduces electronic waste and conserves resources",
    },
    {
      src: battery_recycle,
      heading: "Energy Efficiency",
      text: "Taking proactive steps to decrease energy consumptions in our warehouses and mitigate carbon emissions in our processes",
    },
  ];
  return (
    <section className={styles.work_section}>
      <div className="container">
        <div className={styles.heading}>
          <h3>Learn About Our Approach</h3>
          <p>
            Our focus revolves around eco-conscious practices. Here&apos;s how
            we&apos;re leading the charge towards a greener future
          </p>
        </div>
        <div className={styles.work_lists}>
          {workList.map((item, index) => (
            <div className={styles.work_item} key={index}>
              <div>
                <Image src={item.src} alt="worklist" />
              </div>
              <div>
                <h5>{item.heading}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
