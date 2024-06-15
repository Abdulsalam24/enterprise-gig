"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import logo from "@/assets/svg/logo.svg";
import search from "@/assets/svg/search.svg";
import country_flag from "@/assets/svg/country_flag.svg";
import shopping_cart from "@/assets/svg/shopping-cart.svg";

const Nav = () => {
  const navList = [
    {
      text: "Shop",
      link: "#home",
    },
    {
      text: "About Us",
      link: "#about",
    },
    {
      text: "How It Works",
      link: "#contact",
    },
    {
      text: "Support",
      link: "#joinWaitlist",
    },
    {
      text: "Grading Process",
      link: "#joinWaitlist",
    },
    {
      text: "Contact Us",
      link: "#joinWaitlist",
    },
  ];

  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToogle = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menuToggle]);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_top}>
        <div>
          <Image src={logo} alt="logo" width={205} height={32} />
        </div>
        <div className={styles.nav_right}>
          <Image src={search} alt="search" />
          <Image src={country_flag} alt="search" />
          <Image src={shopping_cart} alt="search" />
        </div>
      </div>

      <ul className={styles.nav_list}>
        <div>
          {navList.map((item, index) => (
            <Link href={item.link} key={index} onClick={handleMenuToogle}>
              <li>{item.text}</li>
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
