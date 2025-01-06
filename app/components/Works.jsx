"use client";
import React, {useState, useEffect} from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

import MoreProjects from "../assets/MoreProjects.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  icon,
  typeicon,
  source_code_link,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);  // Adjust this breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();  // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Conditionally apply animation only on non-small screens
    !isSmallScreen ? (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <CardContainer className="inter-var">
          <CardBody className="bg-tertiary relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-2xl sm:w-[360px] w-full p-5 border h-auto">
            <CardItem translateZ="100" className="w-full">
              <div className="relative w-full h-[230px]">
                <Image
                  src={image}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className={`${
                      typeicon === "github"
                        ? "black-gradient"
                        : typeicon === "drive"
                        ? "bg-slate-200"
                        : "bg-red-500"
                    } w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
                  >
                    <Image
                      src={icon}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
            </CardItem>
            <div className="mt-5">
              <CardItem translateZ="50" className="text-white font-bold text-[24px]">
                {name}
              </CardItem>
              <CardItem as="p" translateZ="60" className="mt-2 text-secondary text-[14px] text-justify">
                {description}
              </CardItem>
            </div>
            <div className="flex flex-col items-center gap-5">
              <CardItem translateZ={20} target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </CardItem>
              <CardItem translateZ={20} as="a" href={source_code_link} className={`px-24 py-3 rounded-xl bg-secondary text-tertiary text-base font-bold`}>
                View Project
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </motion.div>
    ) : (
      <div className="inter-var">
        <CardContainer className="sm:w-[360px] w-full p-1 h-auto">
          <CardBody className="bg-tertiary relative rounded-2xl sm:w-[360px] w-full p-5 h-auto">
            <CardItem translateZ="100" className="w-full">
              <div className="relative w-full h-[230px]">
                <Image
                  src={image}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </CardItem>
            <div className="mt-5">
              <CardItem translateZ="50" className="text-white font-bold text-[24px]">
                {name}
              </CardItem>
              <CardItem as="p" translateZ="60" className="mt-2 text-secondary text-[14px] text-justify">
                {description}
              </CardItem>
            </div>
            <div className="flex flex-col items-center gap-5">
              <CardItem translateZ={20} target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </CardItem>
              <CardItem translateZ={20} as="a" href={source_code_link} className={`px-24 py-3 rounded-xl bg-secondary text-tertiary text-center font-bold`}>
                View Project
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    )
  );
};

const Works = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);  // Adjust this breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();  // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Conditionally apply animation only on non-small screens */}
      {!isSmallScreen ? (
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What I have done so far</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
      ) : (
        <div>
          <p className={`${styles.sectionSubText}`}>What I have done so far</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
      )}

      <div className={`w-full flex ${isSmallScreen ? "flex-col": "flex-row"}  justify-between gap-8`}>
        {/* Conditionally apply fade-in animation for text on non-small screens */}
        {!isSmallScreen ? (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies, and manage projects effectively.
          </motion.p>
        ) : (
          <p className="mt-3 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        )}

        {/* Conditionally apply fade-in animation for image on non-small screens */}
        {!isSmallScreen ? (
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="xl:block hidden mr-7 leading-[30px] mt-[-70px]"
          >
            <Image alt="Projects" src={MoreProjects.src} width={500} height={500} />
          </motion.div>
        ) : (
          <div className="mr-7 leading-[30px] mt-[-40px]">
            <Image alt="Projects" src={MoreProjects.src} width={500} height={500} />
          </div>
        )}
      </div>

      {/* Project Cards */}
      <div className={`${isSmallScreen ? "mt-0 gap-0": "mt-20 gap-7"} flex flex-wrap`}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
