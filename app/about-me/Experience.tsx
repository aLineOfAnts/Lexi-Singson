
import Skill from "../components/about-me/skill"
import ExperienceProfile from "../components/about-me/work-experience/experience-profile";

const experiences = [
    { 
        "position" : "Frontend Systems Programmer",
        "date" : "June 2025 - Present",
        "company" : "Onecore Consultancy Inc.",
        "description" : ["Implemented pages for the HRIS system", "Created the system foundation", "Responsible for the visibility and interactivity of the site."]
    },

    { 
        "position" : "Part-Time Mobile Developer",
        "date" : "March 2025 - Present",
        "company" : "Lightbear Software",
        "description" : ["Responsible for fixing bugs and implementing features on the educational apps.", "Worked on Sentence Reading Magic 2", "Worked on Reading Boost Blending"]
    },

    { 
        "position" : "Web Development Intern",
        "date" : "April - May 2025",
        "company" : "Property Company of Friends, Inc.",
        "description" : ["Responsible for designing UI pages of Onboarding Portal.", "Conceptualized user experience."]
    }
]

const education = [
    {
        "position" : "IMGG Treasurer",
        "date" : "March 2024 - June 2025",
        "company" : "iACADEMY",
        "description" : ["Solely led two lectures to an audience of around 30 students about programming twice.", "Involved in planning events for the year.", "Involved in marketing the organization and events."]
    },

    {
        "position" : "Wordpress Developer",
        "date" : "March - May 2023",
        "company" : "Temple Hills International Inc.",
        "description" : ["In charge of managing the newspaper website"]
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