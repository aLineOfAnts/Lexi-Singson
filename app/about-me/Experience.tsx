import "./about-me.css"
import Skill from "../components/about-me/skill"
import ExperienceProfile from "../components/about-me/work-experience/experience-profile";

const experiences = [
    { 
        "position" : "Part-Time Mobile Developer",
        "date" : "March 16 - Present",
        "company" : "Lightbear Software",
        "description" : ["Responsible for designing UI pages of Onboarding Portal.", "Conceptualized user experience."]
    }
]
export default function Experience() {
    return (
        <section className="experience-section">
            <div className="experience-wrapper">
                <div className="experience-label-wrapper"></div>
                <div className="experience-list">
                    {experiences.map((experience, index) => { return <ExperienceProfile position={experience.position} date={experience.date}  company={experience.company} description={experience.description} key={index}/>} )}
                                     
                </div>
            </div>
        </section>
    );
}