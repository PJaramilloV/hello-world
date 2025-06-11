import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/pjaramillov" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/pablo-jaramillo-vesperinas/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2025 Pablo Jaramillo Vesperinas</p>
      <p>Adapted from Yuji Sato's template</p>
    </footer>
  );
}

export default Footer;