import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://purepng.com/public/uploads/large/31508450097pvfewr0ivkfpo5tyz6do1gcgnwevbei6hcaromkvzral2l2yuzl0dxharwhya5ravvbn6aqdh1xi6mhp1ecbwdtknnzbhq9qqisy.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/pjaramillov" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pablo-jaramillo-vesperinas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pablo Jaramillo</h1>
          <p>ML Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/pjaramillov" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pablo-jaramillo-vesperinas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;