import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

interface ExpertiseBlockProps {
    icon: IconDefinition;
    stack: string[];
    topic: string;
    description: string;
}

function ExpertiseBlock({ icon, stack, topic, description }: ExpertiseBlockProps) {
    return <div className="skill">
                <FontAwesomeIcon icon={icon} size="3x"/>
                <h3>{topic}</h3>
                <p>{description}</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    {stack.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            </div>
}

export default ExpertiseBlock;