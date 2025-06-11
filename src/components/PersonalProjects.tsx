import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import Project from "./Project";


function PersonalProjects() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <Project
                name="Filmate AI"
                url="https://www.filmate.club/"
                imgPath= {mock10}
                description= "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask."
            />
            <Project
                name="High Speed Chase"
                url="https://yujisatojr.itch.io/highspeedchase"
                imgPath={mock09}
                description="Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy."
            />
            <Project
                name="Astro Raiders"
                url="https://yujisatojr.itch.io/spacecraft"
                imgPath={mock08}
                description="Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace."
            />
            <Project
                name="Datum: Integrated Learning Platform"
                url="https://www.datumlearn.com/"
                imgPath={mock07}
                description="This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails."
            />
            <Project
                name="WeManage: Real Estate Asset Management"
                url="http://www.wemanage.jp/"
                imgPath={mock06}
                description="This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript."
            />
            <Project
                name="COVID-19 Case Management"
                url="https://www.byuh.edu/covid-19-case-management"
                imgPath={mock05}
                description="Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes."
            />
            <Project
                name="Multiple Regression Property Analysis"
                url="https://github.com/yujisatojr/multi-reg-analysis"
                imgPath={mock04}
                description="Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn."
            />
            <Project
                name="Programs of Study"
                url="https://holokai.byuh.edu/programs-of-study"
                imgPath={mock03}
                description="Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module."
            />
            <Project
                name="Transfer Evaluation Matrix"
                url="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
                imgPath={mock02}
                description="Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits."
            />
            <Project
                name="Submeowrine"
                url="https://github.com/yujisatojr/submeowrine"
                imgPath={mock01}
                description="Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game."
            />
        </div>
    </div>
    );
}


export default PersonalProjects;