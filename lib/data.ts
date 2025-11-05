import { color } from "framer-motion";
import { title } from "process";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiRadioTower } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BTS systèmes numériques",
    location: "Montpellier, Occitanie",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2022",
    color: "success",
    position: "left",
  },
  {
    title: "Chef de projet logiciel",
    location: "Levallois Perret, Paris",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
    color: "secondary",
    position: "right",
  },
  {
    title: "Technicien bureau d'études",
    location: "Velizy, Ile de France",
    description:
      "I worked in an engineering design office focused on electromagnetics, and I managed the company’s website development in PHP.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
    color: "primary",
    position: "left",
  },
  {
    title: "Expert Wifi et développeur web",
    location: "Vitry-sur-Seine, Ile de France",
    description:
    "I am currently working as a Wifi Expert and i also build web applications using the latest technologies.",
    icon: React.createElement(GiRadioTower),
    date: "2025 - present",
    color: "warning",
    position: "right",
  }
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Loopback 4",
  "Docker",
"Python", 
] as const;