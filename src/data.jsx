import { nanoid } from 'nanoid';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
} from 'react-icons/fa';
import { SiTypescript, SiWebpack } from 'react-icons/si';
import chrusty from './assets/chrusty.png';
import comfy from './assets/comfy.png';
import testsudo from './assets/testsudo.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },

  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];
// skills
export const skills = [
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: 'Strong proficiency in TypeScript, enhancing JavaScript with static typing to build more reliable, scalable applications with improved maintainability and developer productivity.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'Node',
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: 'Experienced in Node.js, creating efficient and scalable server-side applications with a focus on non-blocking, event-driven architecture for real-time data processing.',
  },
  {
    id: nanoid(),
    title: 'Databases',
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in relational and non-relational databases, adeptly managing data integrity and scalability across systems such as PostgreSQL, MongoDB, and MySQL to support complex application requirements.',
  },
  {
    id: nanoid(),
    title: 'AWS',
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in AWS services, leveraging cloud infrastructure for scalable, secure, and high-performance applications, with experience in services like EC2, S3, and Lambda for optimized deployment solutions.',
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className="h-16 w-16 text-emerald-500" />,
    text: 'Knowledgeable in Docker, containerizing applications to streamline development, deployment, and scalability, ensuring consistent environments across various stages of production.',
  },
  {
    id: nanoid(),
    title: 'Webpack',
    icon: <SiWebpack className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in Webpack, optimizing front-end assets and configurations to improve application performance, modularity, and load times, facilitating a smooth user experience.',
  },
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: testsudo,
    url: 'https://testsudo.com/',
    github: 'https://github.com/oslabs-beta/testsudo',
    title: 'Testsudo',
    text: 'With a single CLI command, Testsudo runs comprehensive tests and provides a detailed dashboard for each project, giving you insights on every page and path.',
  },
  {
    id: nanoid(),
    img: chrusty,
    url: 'https://chrusty.co/',
    title: 'Chrusty Co.',
    text: 'An eCommerce platform for a client to showcase and sell their art, featuring a dynamic shop page, cart functionality, and Stripe API integration for seamless payment processing.',
  },
  {
    id: nanoid(),
    img: comfy,
    url: 'https://comfyco.netlify.app/',
    title: 'Comfy Store',
    text: 'A custom eCommerce site developed for a furniture seller to beautifully showcase and sell their products online, complete with a user-friendly shopping experience and secure payment options.',
  },
];
