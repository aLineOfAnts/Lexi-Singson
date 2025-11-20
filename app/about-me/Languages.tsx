import "./about-me.css"
import Skill from "../components/about-me/skill"
const languages = [

    {"name" : "C++", "url" : "ui/About-Me/Languages/C++.png"},
    {"name" : "C#", "url" : "ui/About-Me/Languages/CSharp.png"},
    {"name" : "Java", "url" : "ui/About-Me/Languages/Java.png"},
    {"name" : "Python", "url" : "ui/About-Me/Languages/Python.png"},
    {"name" : "HTML", "url" : "ui/About-Me/Languages/HTML.png"},
    {"name" : "CSS", "url" : "ui/About-Me/Languages/CSS.png"},
    {"name" : "Javascript", "url" : "ui/About-Me/Languages/Javascript.png"},
    {"name" : "Javascript", "url" : "ui/About-Me/Languages/Typescript.png"},
    {"name" : "PHP", "url" : "ui/About-Me/Languages/PHP.png"},
    {"name" : "Swift", "url" : "ui/About-Me/Languages/Swift.png"},
    
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
                        {languages.map((skill, index) => { return <Skill name={skill.name} skillUrl={skill.url} key={index} light={false}></Skill>} )}
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