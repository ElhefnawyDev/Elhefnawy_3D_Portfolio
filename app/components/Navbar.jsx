"use client";
import Head from 'next/head'
import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Link from "next/link";
import Image from "next/image";
import EGZIX from '../assets/EGZIX.jpg'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstPlay, setIsFirstPlay] = useState(true); // Track if it's the first play
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility

  function playPause() {
    const audio = document.getElementById('a1');
    if (isPlaying) {
      // Pause the song
      audio.pause();
      setIsPlaying(false);
    } else {
      // Play the song
      audio.play();
      setIsPlaying(true);

      // If it's the first play, show the popup
      if (isFirstPlay) {
        setShowPopup(true);
        setIsFirstPlay(false); // Mark that the song has been played for the first time
      }
    }
  }
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={64}
            height={64}
            priority
            className="object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ali Elhefnawy&nbsp; <span className="sm:block hidden"> | Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
      <button
        className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
        onClick={playPause}
      >
        {isPlaying ? 'Stop Song' : 'Play Song'}
      </button>
      
      <audio id="a1">
        <source src="./Music/Realize.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Popup for credits */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {/* Image */}
            <div className="popup-image">
              <img src={EGZIX.src} alt="Song Image" className='rounded-full'/>
            </div>

            {/* Title */}
            <h2 className="popup-title">Song Credits</h2>

            {/* Description */}
            <p className="popup-description">
              Author: EGZIX <br />
              Go check him out on Spotify!
            </p>

            {/* Link */}
            <a href="https://open.spotify.com/artist/7j8GjlrNiEFTbTCh4MM85s?si=1tJAQPwXRGqjsvWYnT_7EA" className="popup-link">Listen Here</a>

            {/* Close Button */}
            <button className="popup-close" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Styles for Popup */}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 20px;
          border-radius: 50px;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80vw;
          height: 80vh;
        }
        .popup-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          text-align: center;
        }
        .popup-image img {
          width: 100%;
          max-width: 300px;
          height: auto;
          margin-bottom: 20px;
        }
        .popup-title {
          font-size: 40px;
          margin-bottom: 10px;
        }
        .popup-description {
          font-size: 30px;
          margin-bottom: 20px;
        }
        .popup-link {
          color: #3be477;
          text-decoration: underline;
          margin-bottom: 20px;
          font-size: 30px;
        }
        .popup-close {
          background-color: #ffffff;
          color: black;
          border: none;
          padding: 10px;
          cursor: pointer;
          margin-top: auto;
          border-radius: 50px;
          width:200px
        }
      `}</style>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="cursor-pointer"
          >
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
            ></Image>
          </div>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title)}}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
