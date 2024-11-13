import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaPython,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiDjango, DiJava, DiMysql, DiPython, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Lang Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Anuj Tiwari",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade. I also Skilled in vairous different Languages like Python, Django-Python to create Websites for Backend Mysql, MongoDB , Lite Sql , Node.js React.js ! .",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Image-To-Text Recognition .",
    description:
      "Image-To-Text Recognition application for Android that helps extract text from images for easy usage. (This application doesn’t separate text from images; it only provides you with the extracted text.)",
    image: projectImage1,
    githubLink: "https://github.com/Anuj-Tiwari-coder/Image-To-Text-Recognition",
  },
  {
    id: 2,
    name: "CURD-Operation-by-Django",
    description:
      "A Complete Website By Python-Django which helps to Create , Update , Read and Delete Operation(CURD) on web",
    image: projectImage2,
    githubLink: "https://github.com/Anuj-Tiwari-coder/CURD-Operation-by-Django",
  },
  {
    id: 3,
    name: "Students-Report-Card-Generator (OMR)",
    description:
      "This program introduces the concept of an object-relational mapper (ORM). The website is designed to create and maintain student information, including Student ID, Name, Age, Contact, Email, and Address. It also helps generate report cards for each student.",
    image: projectImage3,
    githubLink: "https://github.com/Anuj-Tiwari-coder/Students-Report-Card-Generator.gi",
  },
  {
    id: 4,
    name: "Custom User-Modification & Model Manager",
    description:
      "A Django-based project that helps create custom modifications, enabling developers to create their own Admin User and Model Manager for streamlined management of data and permissions.",
    image: projectImage4,
    githubLink: "https://github.com/Anuj-Tiwari-coder/Custom-Modification",
  },
  {
    id: 5,
    name: "E-Commerce Product Catalog",
    description:
      "An e-commerce product catalog system where users can view and filter products by category, price, and rating. This project also demonstrates the use of database optimization and efficient querying.",
    image: projectImage5,
    githubLink: "https://github.com/user/ecommerce-catalog",
  },
  {
    id: 6,
    name: "Task Management Tool",
    description:
      "A task management application that allows users to create, edit, and delete tasks. Includes features like due dates, priority levels, and a drag-and-drop Kanban board layout.",
    image: projectImage6,
    githubLink: "https://github.com/user/task-management-tool",
  },
];

export const BIO = [
  "Anuj Tiwari is an accomplished programmer and web developer with a strong foundation in software development. Holding a Bachelor of Science in Computer Science from SIWS College, Anuj has honed a diverse skill set that covers both front-end and back-end technologies, making them a versatile asset in any development environment.",
  
  "With expertise in Python and Django, Anuj is skilled at building robust, scalable back-end applications that support complex and high-performance solutions. This back-end strength is complemented by substantial experience with front-end technologies like HTML, CSS, and JavaScript, allowing Anuj to craft well-rounded applications with seamless user experiences.",
  
  "In addition to these core skills, Anuj is also proficient in React, enabling the creation of dynamic and responsive user interfaces that enhance engagement and usability. Anuj’s knowledge of Java further expands their versatility, making them capable of tackling a variety of programming challenges across different environments.",
  
  "Anuj is passionate about developing efficient, user-friendly digital solutions and is committed to continuous learning. They actively keep pace with the latest advancements in technology, ensuring that their skills remain sharp and relevant in a fast-evolving industry."
];


export const SKILLS = [
  {
    icon: <DiJava className="text-4xl text-white lg:text-5xl" />,
    name: "Java",
    experience: "1+ year",
  },
  {
    icon: <FaPython className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Python",
    experience: "2+ year",
  },
  {
    icon: <DiDjango className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Django-Python",
    experience: "2+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <DiMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "2+ year",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "SIWS College",
    duration: "September 2020 - June 2024",
    description:
      "In 2024, I graduated from Siws College with a Bachelor of Science degree in Computer Science, specializing in web development. My coursework and projects gave me hands-on experience with front-end technologies like HTML, CSS, and JavaScript, along with back-end development using Node.js and React. Additionally, I developed skills in Python and Django, enabling me to build comprehensive full-stack applications. Graduated with a GPA 6.06.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/anuj.tiwari.coder/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Anuj-Tiwari-coder",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
