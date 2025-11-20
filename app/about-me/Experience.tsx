
import Skill from "../components/about-me/skill"
import ExperienceProfile from "../components/about-me/work-experience/experience-profile";

const experiences = [
    { 
        "position" : "Frontend Systems Programmer",
        "date" : "March 16 - Present",
        "company" : "Onecore Consultancy Inc.",
        "description" : ["Implemented pages for the HRIS system", "Created the system foundation", "Responsible for the visibility and interactivity of the site."]
    },

    { 
        "position" : "Part-Time Mobile Developer",
        "date" : "March 16 - Present",
        "company" : "Lightbear Software",
        "description" : ["Responsible for fixing bugs and implementing features on the educational apps.", "Worked on Sentence Reading Magic 2", "Worked on Reading Boost Blending"]
    },

    { 
        "position" : "Web Development Intern",
        "date" : "March 16 - Present",
        "company" : "Property Company of Friends, Inc.",
        "description" : ["Responsible for designing UI pages of Onboarding Portal.", "Conceptualized user experience."]
    }
]
export default function Experience() {
    return (
        <section className="experience-section">
            <div className="experience-content-wrapper">
                
                <div className="experience-header-wrapper">
                    <img src="ui/About-Me/Experience/Work Experience.svg" className="experience-header"></img>
                </div>
                <div className="experience-list">
                    {experiences.map((experience, index) => { console.log("test"); return <li className="experience-item-li" key={index}><ExperienceProfile position={experience.position} date={experience.date}  company={experience.company} description={experience.description}/></li>} )}
                </div>
             </div>
            
        </section>
    );
}