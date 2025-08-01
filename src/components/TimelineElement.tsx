import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface TimelineElementProps {
  icon: any;
  date: string;
  company?: string;
  jobTitle?: string;
  location: string;
  description: string;
  future: boolean;
}

function TimelineElement({icon, date, company, jobTitle, location, description, future}: TimelineElementProps) {
  return <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    {...future? 
      {contentStyle: { background: 'rgba(255, 228, 94, 1)'}, contentArrowStyle: {borderRight: '16px solid rgba(255, 228, 94, 1)'}} 
      : {}
    }
    
    icon={icon}
    date={date+'\n'+location}
  >
    <h3 className="vertical-timeline-element-title">{jobTitle}</h3>
    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
    <p>
      {description}
    </p>
  </VerticalTimelineElement>
}

TimelineElement.defaultProps = {
  future: false,
}

export default TimelineElement;