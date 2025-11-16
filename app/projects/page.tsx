'use client'
import "./projects.css"
import Project from "../components/projects/project/project"
import { ReactNode, useState } from "react"


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

interface GalleryProps {
    list : []
    listItem : ReactNode
}
export default function Projects() {
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(1);
    const pages = Math.round(projects.length / 5)

    const CheckPage = (newIndex : number) => {
        const leftArrow = document.getElementById("projects-left-arrow")
            if (leftArrow) {
            if (newIndex <= 0) {
                leftArrow.classList.remove("shown");
                leftArrow.classList.add("hidden");
            } else {
                leftArrow.classList.add("shown");
                leftArrow.classList.remove("hidden");
            }
        }
        

        const rightArrow = document.getElementById("projects-right-arrow")
        if (!rightArrow) { return }
        if (newIndex + 6 >= projects.length || newIndex >= projects.length) {
            rightArrow.classList.remove("shown");
            rightArrow.classList.add("hidden");
        } else {
            rightArrow.classList.remove("hidden");
            rightArrow.classList.add("shown");
        }
            
        
    }
    return (
        <section className="projects-section">
            <h1>Projects</h1>
            <div className="projects-content-wrapper">
                <div className="projects-list">
                    {projects.slice(index, index+6).map((project, index) => { return <Project title={project.name} description={project.description} image={project.image}></Project>})}
                </div>
                <div className="projects-list-page-indicator">
                    <div>
                            <input type="image" src="/ui/Projects/ui/Arrow left.svg" className="" id="projects-left-arrow" 
                        onClick={() => {
                            if (index <= 0) { return; }
                            const newIndex = index - 6
                            setIndex(newIndex)
                            setPage(page - 1)
                            CheckPage(newIndex)
                        }}></input>
                    </div>
                    <div>
                        <p>{page} of {pages}</p>
                    </div>
                    <div>
                        <input type="image" src="/ui/Projects/ui/Arrow right.svg"  id="projects-right-arrow" onClick={() => {
                        const newIndex = index + 6
                        if (newIndex > projects.length) { return }
                        if (newIndex >= projects.length) { return }
                        setIndex(newIndex);
                         setPage(page + 1)
                        CheckPage(newIndex)
                    }}></input>
                    </div>
                    
                    
                    

                </div>
            </div>

        </section>
    )
}