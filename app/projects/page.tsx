import { Suspense } from "react"
import "./projects.css"
import Project from "../components/projects/project/project"

export default function Projects() {
    return (
        <section className="projects-section">
            <h1>Projects</h1>
            <div className="projects-content-wrapper">
                <div className="projects-list">
                    
                    <Project title="A Dining Sim" description="blah blah" image=""></Project>
                    <Project title="Rush Stop" description="blah blah" image=""></Project>
                    <Project title="Slice" description="blah blah" image=""></Project>
                    <Project title="Flappy Rat" description="blah blah" image=""></Project>
                    <Project title="Farming Prototype" description="blah blah" image=""></Project>
                    <Project title="Royalchemy" description="blah blah" image=""></Project>
                </div>
                <div className="projects-list-page-indicator">
                    <input type="image" src="/ui/Projects/ui/Arrow left.svg" className="hidden"></input>
                    <p>1 of 3</p>
                    <input type="image" src="/ui/Projects/ui/Arrow right.svg"></input>
                    
                </div>
            </div>
            
        </section>
    )
}