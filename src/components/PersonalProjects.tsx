import React from "react";
// import CELL from '../assets/images/cellnoise.png';
import CELLVID from '../assets/videos/cellnoisedemo.mp4';
import RDF from '../assets/images/rdf.png';
import SHEETS from '../assets/images/sheets.png';
import PROFUNDIS from '../assets/images/profundis.png'; 
import '../assets/styles/Project.scss';
import Project from "./Project";


function PersonalProjects() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <Project
                    name="Cell Noise Shader"
                    url=""
                    img_or_vid_url={CELLVID}
                    description="Created a highly customizable cell noise shader in C++ using OpenGL and GLSL, displaying the capabilities of GLSL subroutines."
                />
            <Project
                    name="SparQL query visualizer for RDF Playground"
                    url="https://rdfplayground.dcc.uchile.cl"
                    img_or_vid_url={RDF}
                    description="Developed a SparQL query visualizer for University of Chile's RDF Playground. This tool allows users to visualize the results of their SparQL queries in a user-friendly manner to help learn SparQL syntax and semantics."
                />
            <Project
                name="Google Sheets Grading Template"
                url="https://docs.google.com/spreadsheets/d/1q23jDfr8FnkHyo554HMRdAFwcAbJWWvQJY1djALgI84/edit?usp=sharing"
                img_or_vid_url={SHEETS}
                description="Designed an automated Google Sheets template powered by AppScript macros for creating new sheets to help quickly grade students, allowing for easy customization and scalability. Allowing teachers to distribute and share gradings with other teachers."
            />
            <Project
                name="Profundis"
                url="https://bacan-studios.itch.io/profundis"
                img_or_vid_url={PROFUNDIS}
                description="Created an experimental game developed in Godot Engine, where the player must explore by sound to find the exit of a maze. Available for free on Itch.io."
            />
        </div>
    </div>
    );
}


export default PersonalProjects;