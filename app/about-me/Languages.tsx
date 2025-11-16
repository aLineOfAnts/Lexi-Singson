import "./about-me.css"
import Skill from "../components/about-me/skill"
const languages = [

    {"name" : "C++", "url" : "ui/About-Me/Languages/c+.png"},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""},
    {"name" : "C++", "url" : ""}
]

/*



*/
export default function Languages() {
    return (
        <section className="skills-container languages-section">
            <div className="skills-content-wrapper">
                 <div className="skills-label-wrapper">
                    <img src="ui/About-Me/Languages.png" className="skills-label"></img>
                </div>
                <div className="skills-list-wrapper2">
                    <div className="skills-list">
                        {languages.map((skill, index) => { return <Skill name={skill.name} url={skill.url} key={index} light={false}></Skill>} )}
                    </div>
                    <div className="skills-list-page-label">
                        <p>1 of 2</p>
                        <button><img src="ui/About-Me/Arrow Right.svg"></img></button>
                    </div>
                </div>
            </div>
        </section>
    )
}