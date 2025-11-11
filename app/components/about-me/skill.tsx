'use client'
import { MouseEvent } from "react"
import "./caption.css"
interface SkillProps {
    name : string,
    url : string
}
export default function Skill({name, url} : SkillProps) {
    

    const ShowCaption = (event : MouseEvent) => {
        const element = document.getElementById("caption-" + name);

        if (element?.classList.contains("hidden")) {
            element.classList.remove("hidden");
            element.classList.add("shown");
            element.style.left = event.clientX  + "px";
            element.style.top = event.clientY + "px";
        }
    }  

    const MoveCaption = (event : MouseEvent) => {
        const element = document.getElementById("caption-" + name);
        if (!element) { return; }
        element.style.left = event.clientX + -35 + "px";
        element.style.top = event.clientY + -8 + "px";
    }

    const HideCaption = (event : MouseEvent) => {
        const element = document.getElementById("caption-" + name);
        if (element?.classList.contains("shown")) {
            element.classList.remove("shown");
            element.classList.add("hidden");
            
        }
    }
    
    return (
    <>
        <div className="skills-list-slot">
            <img src={url} className="skill" 
            onMouseEnter={(event) => {
                ShowCaption(event);
            }}

            onMouseLeave={(event) => {
                HideCaption(event);
            }}

            onMouseMove={(event) => {
                MoveCaption(event);
            }}
            ></img>
        </div>

        <p className="caption hidden" id={"caption-" + name}>{name}</p>
    </>
    );
}