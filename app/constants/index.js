import {
    gameDev,
    mobileDev,
    vrarDev,
    webDev,
    github,
    Wamy,
    Huawie,
    Isianpadu,
    Vex,
    drive,
    itch,
    InteriorVR,
    arTimetraveler,
    CTF,
    Goover,
    Guidex,
    Mobileapp,
    Website,
    pocatch,
    insta,
    SFA,
    voiceRec,
    FPS,
    carRacing,
    AnswerMaze,
    createRobot
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Game Developer",
      icon: gameDev,
    },
    {
      title: "AR/VR Developer",
      icon: vrarDev,
    },
    {
      title: "Mobile Developer",
      icon: mobileDev,
    },
    {
      title: "Web Developer",
      icon: webDev,
    },
  ];
  
  const technologies = [
    // {
    //   name: "Unity",
    //   icon: './tech/html.png',
    // },
    // {
    //   name: "Blender",
    //   icon: './tech/css.png',
    // },
    // {
    //   name: "Photoshop",
    //   icon: './tech/javascript.png',
    // },
    // {
    //   name: "Premier",
    //   icon: './tech/typescript.png',
    // },
    {
      name: "NextJs",
      icon: './tech/reactjs.png',
    },
    
 
  ];
  
  const experiences = [
    {
      title: "Programming Leadership",
      company_name: "VEX IQ RINGMASTER",
      icon: Vex,
      iconBg: "#e31e27",
      date: "2017-2018",
      points: [
        "Participated in the VEX IQ Robotics Competition, taking a leadership role in programming within Team 10804H Technical Problems.",
        "Utilized C++ to code the robot, resulting in substantial contributions to the team's achievement in winning the Amaze Award.",
      ],
    },
    {
      title: "STEM Promotion and Multimedia Production",
      company_name: "VEX IQ NEXT LEVEL",
      icon: Vex,
      iconBg: "#e31e27",
      date: "2018-2019",
      points: [
        "Led STEM promotion and multimedia production efforts for Team 36327A Robo Sapience in the VEX IQ robotics competition resulting in securing 1st place in Egypt and obtaining the Excellence Award, Teamwork Champion Award, and 1st Place in Robot Skills Champion.",
      ],
    },
    {
      title: "Video Production Leadership",
      company_name: "WAMY VIDEO PRODUCTION",
      icon: Wamy,
      iconBg: "#ffffff",
      date: "Aug 2022",
      points: [
        "Led a team for WAMY Video Production Competition overseeing the collaborative effort to create a compelling video entry.",
        "Contributed to the conceptualization, scripting, filming, and editing processes of the video entry.",
        "emphasizing the value of achievement and ultimately securing 3rd place."
      ],
    },
    {
      title: "Project Developer",
      company_name: "HUAWEI CLOUD DEVELOPER COMPETITION APAC 2023",
      icon: Huawie,
      iconBg: "#ffffff",
      date: "Aug 2023 - Sep 2023",
      points: [
        "Participated in Huawie Cloud Developer Competition APAC 2023 as ALGO-CHAOS team and qualified to proceed to second phase of the competition.",
        "Created GuideX, an innovative app that empowers visually impaired individuals with advanced voice commands, object recognition, location-based guidance, and secure emergency assistance.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "ISIANPADU SYSTEMS SDN. BHD.",
      icon: Isianpadu,
      iconBg: "#ffffff",
      date: "Aug 2024 - Present",
      points: [
        "Currently enrolled as a Full-stack Developer and Technician intern at Isianpadu Systems Sdn. Bhd., where I am gaining hands-on experience in designing, developing, and maintaining web and mobile applications. This role allows me to apply my skills in both front-end and back-end technologies, as well as contribute to technical support tasks. I am focused on delivering efficient, scalable solutions while further developing my expertise in the full-stack development lifecycle and technical troubleshooting.",
      ],
    },
  ];
  
  const testimonials = [
    {
      quote:
        "I integrated voice recognition into Amaze Venture to enable natural interactions and immersive experience. Players can use voice commands to interact with AI NPCs. This feature improves accessibility and immersion, showcasing my ability to combine innovative technology with creative game design.",
      name: "VOICE RECOGNITION",
      designation: "Whisper AI",
      company: "Acme Co",
      src: voiceRec.src,
    },
    {
      quote:
        "I implemented a color-shooting challenge where players face off against NPCs powered by Behavior Tree AI. This intelligent AI makes NPCs more responsive and adaptive, ensuring that they choose the best choises as the game progresses.",
      name: "Color Ball Shooting",
      designation: "Behavior Tree + AI Pathfinder",
      company: "DEF Corp",
      src: FPS.src,
    },
    {
      quote:
        "I created an exciting car racing challenge where NPCs are powered by ML-Agents and Reinforcement Learning (RL). Using RL techniques, the NPCs learn and improve their racing strategies over time, adapting to the player's actions and becoming increasingly competitive.",
      name: "Car Racing",
      designation: "Reinforcement Learning ML",
      company: "456 Enterprises",
      src: carRacing.src,
    },
    {
      quote:
        "I designed a maze challenge where an NPC navigates through the maze based on the user's answer to a question. The NPC’s movement direction changes depending on the correct or incorrect input while using voice recognition.",
      name: "Quiz System + AI + Voice Recognition",
      designation: "Quiz System + AI + Voice Recognition",
      company: "456 Enterprises",
      src: AnswerMaze.src,
    },
    {
      quote:
        "I designed a maze challenge where an NPC navigates through the maze based on the user's answer to a question. The NPC’s movement direction changes depending on the correct or incorrect input while using voice recognition.",
      name: "Maze Challenge",
      designation: "Quiz System + AI + Voice Recognition",
      company: "456 Enterprises",
      src: createRobot.src,
    },
  ];
  
  const projects = [
    {
      name: "SFA 365 Mobile + AI Bot",
      description:
        "SFA365 designed to empower sales teams by simplifying the capture, update, and monitoring of leads and prospective projects. It ensures consistent target achievement by keeping sales professionals alert and efficient at every stage of the sales process, driving productivity and success.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "ExpresJS",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "Prisma",
          color: "blue-text-gradient",
        },
        {
          name: "CrewAI",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: SFA,
      icon: insta,
      typeicon:'drive',

      source_code_link: "https://www.instagram.com/reel/DEOofkDPHb_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      name: "InteriorVR",
      description:
        "An immersive VR application for furniture design students. It enables users to virtually examine, customize, and interact with 3D furniture models, streamlining the prototyping and revision phases to save costs and time.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "CSharp",
          color: "pink-text-gradient",
        },
      ],
      image: InteriorVR,
      icon: drive,
      typeicon:'drive',

      source_code_link: "https://drive.google.com/file/d/14x303Y6WwBIDYl_XPon7ICsnc5FT6IzR/view?usp=sharing",
    },
    
    {
      name: "Book Rooms And Facilities for UTHM FSKTM",
      description:
        "A facility booking website for FSKTM at UTHM ensuring prevention of timetable conflicts and providing structured navigation.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: Website,
      icon: github,
      typeicon:'github',

      source_code_link: "https://github.com/ElhefnawyDev/Facilities-Booking-Site",
    },
    {
      name: "HyRech",
      description:
        "Led the development of HyRech Mobile app which provides personalized hydration recommendations by considering individual user data and external factors like weather. It also sends timely reminders to encourage consistent hydration.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
      ],
      image: Mobileapp,
      icon: github,
      typeicon:'github',

      source_code_link: "https://github.com/ElhefnawyDev/Hyrech",
    },
    {
      name: "GuideX",
      description:
        "Led the development of GuideX, an innovative app for visually impaired individuals, using advanced voice commands, object recognition, location-based guidance, and secure emergencies using AI Technologies.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
        {
          name: "YOLO",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
      ],
      image: Guidex,
      icon: drive,
      typeicon:'drive',

      source_code_link: "https://drive.google.com/file/d/1T7A58PQn5AeSZYdi27Qm3ZRJ1OCyHXfO/view?usp=sharing",
    },
    
    {
      name: "AR TIME TRAVELER",
      description:
        "Led the development of AR learning app for 6th grade students focusing on teaching Malaysian history curriculum subject, it's integrated with AR to gamify the experience and entertain students while learn..",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "CSharp",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
      ],
      image: arTimetraveler,
      icon: itch,
      typeicon:'itch',
      source_code_link: "https://ali-elhefnawey.itch.io/ar-time-traveler",
    },
    {
      name: "POCATCH",
      description:
        "Led the development of AR video game for Android users using Unity Game Engine and C# integrated with GPS features which is inspired from Pokemon-Go game.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "CSharp",
          color: "pink-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
      ],
      image: pocatch,
      icon: itch,
      typeicon:'itch',
      source_code_link: "https://ali-elhefnawey.itch.io/pocatch",
    },
    {
      name: "GOOVER",
      description:
        "GOOVER is a 2D platform runner video game for Android users using Unity Game Engine and C# which is inspired from T-Rex google game.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
        {
          name: "CSharp",
          color: "pink-text-gradient",
        },
      ],
      image: Goover,
      icon: itch,
      typeicon:'itch',

      source_code_link: "https://ali-elhefnawey.itch.io/creativity-project",
    },
    {
      name: "Capture The Flag",
      description:
        "Developed a full 2D runner video game “Goover” for Android users using Unity Game Engine and C# which is inspired from T-Rex google game.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
        {
          name: "CSharp",
          color: "pink-text-gradient",
        },
      ],
      image: CTF,
      icon: itch,
      typeicon:'itch',

      source_code_link: "https://ali-elhefnawey.itch.io/capture-the-flag",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };