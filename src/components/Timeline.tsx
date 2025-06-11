import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

interface TimelineElementProps {
  icon: any;
  date: string;
  jobTitle: string;
  location: string;
  description: string;
}

function TimelineElement({icon, date, jobTitle, location, description}: TimelineElementProps) {
  return <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    
    icon={icon}
    date={date}
  >
    <h3 className="vertical-timeline-element-title">{jobTitle}</h3>
    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
    <p>
      {description}
    </p>
  </VerticalTimelineElement>
}

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <TimelineElement 
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            date="2022 - present"
            jobTitle="Technology Consultant"
            location="Dallas, TX"
            description="Full-stack Web Development, GenAI/LLM, Project Management, Business Development"
          ></TimelineElement>
          <TimelineElement
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            date="2021 - 2022"
            jobTitle="Full Stack Engineer"
            location="Laie, HI"
            description="Frontend Development, Backend Development, User Experience, Team Leading"
          ></TimelineElement>
          <TimelineElement
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            date="2021 - 2021"
            jobTitle="Staff Engineer Intern"
            location="Laie, HI"
            description="Full-stack Development, API Development, User Experience"
          ></TimelineElement>
          <TimelineElement
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            date="2020 - 2020"
            jobTitle="Data Analyst Intern"
            location="Tokyo, Japan"
            description="Automation, Data Governance, Statistical Analysis"
          ></TimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;