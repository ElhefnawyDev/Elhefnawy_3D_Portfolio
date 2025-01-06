'use client';
import React from "react";

import { Unity } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import TechImage from "../assets/Tech.png"
import Image from "next/image";
import { motion } from "framer-motion";
import {  textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Showcasing Expertise & Tools</p>
    <h2 className={styles.sectionHeadText}>Skills.</h2>
  </motion.div>
        <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
          className='flex justify-center'
        >
      <Image alt="tech" src={TechImage.src} width={1300} height={1300}></Image>
    </motion.div>

    </>

  );
};

export default SectionWrapper(Tech, "");