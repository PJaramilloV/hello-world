import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { faRobot, faMagnifyingGlassChart,  } from '@fortawesome/free-solid-svg-icons';
import { faDocker, } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';
import './Expertise-block'
import ExpertiseBlock from "./Expertise-block";

const labelsMLIA = [
    "Bedrock", 
    "Strands",
    "Serverless",
    "LangChain",
    "Sklearn",
];

const labelsDataSci = [
    "Pandas",
    "R Tidyverse",
    "Plotly",
    "Seaborn",
];

const labelsSoftDev = [
    "Linux",
    "React",
    "TypeScript",
    "Flask",
    "Django",
    "Postman",
    "Python",
    "SQL",
    "SparQL",
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <ExpertiseBlock
                    icon={faRobot}
                    stack={labelsMLIA}
                    topic="ML & AI"
                    description="If you got a dataset, I can extract it's full potential and help you build a model to extract insights, make predictions. I am familiar with Generative AI, LLMs, as well as traditional ML techotniques. Got expertize in AI agent orchestration, tools integration, management of Knowledge Bases, and more."
                />
                <ExpertiseBlock
                    icon={faMagnifyingGlassChart}
                    stack={labelsDataSci}
                    topic="Data Science"
                    description="With a strong foundation in data analysis and visualization, as well as endless curiosity, I search and extract insights from data to determine patterns, trends, and the best vectors for decision-making."
                />

                <ExpertiseBlock
                    icon={faDocker}
                    stack={labelsSoftDev}
                    topic="Software Development"
                    description="You can count on me to develop software solutions that are efficient, scalable, and maintainable. I have experience in both front and back-end development, with a strong preference for back-end. Despite my preference, I am not afraid to get out of my comfort zone and learn new technologies to adapt to your tech-stack."
                />

            </div>
        </div>
    </div>
    );
}

export default Expertise;