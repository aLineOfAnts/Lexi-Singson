'use client'
import "./projects.css"
import Project from "../components/projects/project/project"
import { useState } from "react"


const projects = [
    {
        "name" : "A Dining Sim",
        "description" : "",
        "image" : ""
    },
    
    {
        "name" : "A Dining Sim",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "A LALLAAL Sim",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "LALALA",
        "description" : "",
        "image" : ""
    }
]
export default function Projects() {
    console.log(projects.slice(1, 2))
    const [index, setIndex] = useState(0);
    return (
        <section className="projects-section">
            <h1>Projects</h1>
            <div className="projects-content-wrapper">
                <div className="projects-list">
                    {projects.slice(index, index+6).map((project, index) => { return <Project title={project.name} description={project.description} image={project.image}></Project>})}
                </div>
                <div className="projects-list-page-indicator">
                    <input type="image" src="/ui/Projects/ui/Arrow left.svg" className="hidden" 
                    onClick={() => {
                        
                        if (index <= 0) { return; }
                        setIndex(index - 6);
                    }}></input>
                    <p>1 of 3</p>
                    <input type="image" src="/ui/Projects/ui/Arrow right.svg" onClick={() => {
                        if (index + 6 < projects.length) { return }
                        if (index >= projects.length - 1) { return }
                        setIndex(index + 6);
                    }}></input>
                    
                </div>
            </div>
            
        </section>
    )
}

