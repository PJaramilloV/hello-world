import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface TimelineElementProps {
  icon: any;
  date: string;
  company?: string;
  jobTitle: string;
  location: string;
  description: string;
}

function TimelineElement({icon, date, company, jobTitle, location, description}: TimelineElementProps) {
  return <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    
    icon={icon}
    date={date}
  >
    <h3 className="vertical-timeline-element-title">{jobTitle}</h3>
    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
    <h5 className="vertical-timeline-element-date">{location}</h5>
    <p>
      {description}
    </p>
  </VerticalTimelineElement>
}

export default TimelineElement;