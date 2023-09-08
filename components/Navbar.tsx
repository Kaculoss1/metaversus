"use client";

import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import search from "@/public/search.svg";
import menu from "@/public/menu.svg";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-1/2 inset-0 gradient-01  " />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image src={search} alt="search" className="w-6 h-6 object-contain" />
        <h2 className="font-kextrabold text-[24px] leading-[30px] text-white ">
          METAVERSUS
        </h2>
        <Image src={menu} alt="menu" className="w-6 h-6 object-contain" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
