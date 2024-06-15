import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import appleLogo from "@/assets/svg/apple_logo.svg";
import samsungLogo from "@/assets/svg/samsung_logo.svg";
import hpLogo from "@/assets/svg/hp_logo.svg";
import phonecheckLogo from "@/assets/svg/phonecheck_logo.svg";
import dellLogo from "@/assets/svg/dell_logo.svg";

const SponsorLogo = () => {
  const sponsorLogo = [
    {
      img: samsungLogo,
    },
    {
      img: dellLogo,
    },

    {
      img: hpLogo,
    },

    {
      img: phonecheckLogo,
    },

    {
      img: appleLogo,
    },
    {
      img: dellLogo,
    },
    {
      img: phonecheckLogo,
    },
  ];
  return (
    <div className={styles.sponsor_logo}>
      <div className="container">
        {sponsorLogo.map((sponsor, index) => (
          <Image key={index} src={sponsor.img} alt="sponsor img" />
        ))}
      </div>
    </div>
  );
};

export default SponsorLogo;
