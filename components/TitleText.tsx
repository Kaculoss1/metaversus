"use client";

import { textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface IProps {
  title: string | React.ReactNode;
  textStyles?: string;
}

const TitleText = ({ title, textStyles }: IProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-kbold md:text-[64px] text-[40px] text-white ${textStyles} `}
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;
