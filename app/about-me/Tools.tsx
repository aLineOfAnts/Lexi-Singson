
import Skill from "../components/about-me/skill"
const languages = [

    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined},
    {"name" : "C++", "url" : undefined}
]


export default function Tools() {
    return (
        <section className="skills-container">
            <div className="skills-content-wrapper">
                <div className="skills-label-wrapper">
                    <img src="ui/About-Me/Tools.png" className="skills-label skills-tool-label"></img>
                </div>
                <div className="skills-list-wrapper2">
                    <div className="skills-list">
                        {languages.map((skill, index) => { return <Skill name={skill.name} skillUrl={skill.url} key={index} light={true}></Skill>} )}
                    </div>
                    <div className="skills-list-page-label hidden">
                        <p>1 of 2</p>
                        <button><img src="ui/About-Me/Arrow Right.svg"></img></button>
                    </div>
                </div>
            </div>
        </section>
    )
}