import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";
import '../assets/styles/Timeline.scss'

import ENTEL      from '../assets/images/entel.webp';
import GTC        from '../assets/images/gtc.png';
import UMCE       from '../assets/images/umce.png';
import UCHILE     from '../assets/images/uchile.jpg'; 
import PUC        from '../assets/images/puc.png';
import STEFANINI  from '../assets/images/stefanini.jpg'; 

function icon(src: string) {
  return <img src={src} alt="logo" style={{ borderRadius: "50%", width: "100%", background:"white" }} />;
}

const future_work = <TimelineElement 
  icon={<FontAwesomeIcon icon={faQuestion} />}
  date="Tomorrow - The Future"
  company="Your Company"
  location="Wherever you are"
  description="Let's build the future together! I am currently on the market, so if you have a project that you think I would be a good fit for, please don't hesitate to reach out."
  future={true}
></TimelineElement>

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* {future_work} */}
          <TimelineElement
            icon={icon(STEFANINI)}
            date="Ago. 2025 - Present"
            jobTitle="AI Consultant"
            company="Stefanini Latam"
            location="Santiago, Chile"
            description="Working directly with my client as an AI consultant, providing vital solutions to the growth, optimization and performance to live business-related and user facing AI systems. Accelerating the adoption of AI technologies and best practices within the organization to drive innovation and efficiency."
          ></TimelineElement>
          <TimelineElement 
            icon={icon(PUC)}
            date="Ago. 2024 - May. 2025"
            jobTitle="ML Engineer"
            company="Pontifical Catholic University of Chile"
            location="Santiago, Chile"
            description="Designed and developed a system for data treatment and model training for quality control of wines from spectral data for FONDEF project 23I0024. Colaborated with the department of Chemistry and Pharmacy at PUC, The National Center of Artificial Intelligence (CENIA), and Gux Technologies. The system was built using Python, Docker, and Azure."
          ></TimelineElement>
          <TimelineElement 
            icon={icon(UCHILE)}
            date="Jul. 2021 - Dec. 2024"
            jobTitle="Undergraduate Thesis, Assistant Professor & Assignment Grader"
            company="University of Chile"
            location="Santiago, Chile"
            description="Wrote my thesis on the use of Deep Diffusion Models for 3D Shape Repair, which was awarded the highest grade. The thesis was adapted into a paper accepted at ECCV 2024. Worked as an assistant professor at the Operative Systems course, teaching about Linux, C and parallel programming. Also worked as an assignment grader for 5 courses, including introductory programming, programming languages, computer graphics and modelling, operative systems and deep learning."
          ></TimelineElement>
          <TimelineElement
            icon={icon(UMCE)}
            date="Aug. 2023 - Dec. 2023"
            jobTitle="Full Stack Engineer"
            company="UMCE"
            location="Santiago, Chile"
            description="Developed a web application to unify UMCE's student support services, allowing different health departments to share information while maintaining data privacy. The application was built using React, Django, and PostgreSQL, and mounted on Docked."
          ></TimelineElement>
          <TimelineElement
            icon={icon(GTC)}
            date="Jan 2023. - Mar. 2023"
            jobTitle="Software Engineer Intern"
            company="Empresas GTC"
            location="Santiago, Chile"
            description="Designed and implemented a web scrapper to identify potential clients for Empresas GTC."
          ></TimelineElement>
          <TimelineElement
            icon={icon(ENTEL)}
            date="Feb. 2022 - Mar. 2022"
            jobTitle="Data Science Intern"
            company="ENTEL"
            location="Santiago, Chile"
            description="Performed Exploratory Data Analysis and developed a relevance metric for detecting need for repairs in MPR systems based on KPI data."
          ></TimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;