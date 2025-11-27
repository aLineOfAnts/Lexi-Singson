
import Skill from "../components/about-me/skill"
const tools = [

    {"name" : "Visual Studio Code", "url" : "ui/About-Me/Tools/Visual Studio Code.png"},
    {"name" : "Visual Studio", "url" : "ui/About-Me/Tools/Visual Studio.png"},
    {"name" : "Unity", "url" : "ui/About-Me/Tools/Unity.png"},
    {"name" : "Game Maker Studio 2", "url" : "ui/About-Me/Tools/Gamemaker.png"},
    {"name" : "Godot", "url" : "ui/About-Me/Tools/Godot.png"},
    {"name" : "XCode", "url" : "ui/About-Me/Tools/XCode.png"},
    {"name" : "Procreate", "url" : "ui/About-Me/Tools/Procreate.png"},
    {"name" : "Figma", "url" : "ui/About-Me/Tools/Figma.png"},
    {"name" : "", "url" : undefined},
    {"name" : "", "url" : undefined}
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
                        {tools.map((skill, index) => { return <Skill name={skill.name} skillUrl={skill.url} key={index} light={true}></Skill>} )}
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