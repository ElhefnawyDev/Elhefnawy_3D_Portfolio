'use client';
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import {SectionWrapper} from '../hoc'
import Image from 'next/image';

import aboutmeImg from '../assets/AboutMeWeb.png'

const ServiceCard = ({index, title, icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 *index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <Image
          src={icon}
          alt='web-development'
          className='w-28 h-28 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        </div>
      </motion.div>
    </Tilt >

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview. </h2>
      </motion.div>
      <div className={'flex flex-row justify-between gap-8'}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
        >
        As a dedicated Computer Science student at Universiti Tun Hussein Onn Malaysia, I possess a deep-seated enthusiasm for multimedia technologies and specialize in developing advanced solutions through technology. I have acquired proficiency in numerous programming languages and gained hands-on experience in frameworks such as Unity, Unreal Engine, Flutter, and Next.js. My expertise lies in the creation of video games, animation videos, web and mobile applications, with a particular emphasis on AR and VR apps, effectively blending artistic creativity with programming acumen.
        </motion.p>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='xl:block hidden mr-7 leading-[30px]'
        >
          <Image alt="Ali Elhefnawy" src={aboutmeImg.src} width={250} height={290}></Image>
        </motion.div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index = {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")