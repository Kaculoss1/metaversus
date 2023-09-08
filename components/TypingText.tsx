"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  textStyles?: string;
}

const TypingText = ({ title, textStyles }: IProps) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles} `}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
