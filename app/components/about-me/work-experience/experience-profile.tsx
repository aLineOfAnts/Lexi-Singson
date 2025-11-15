import "./experience-profile.css"

interface ExperienceProps {
    position : string,
    date : string,
    company : string,
    description : string[]
}

export default function ExperienceProfile({position, date, company, description} : ExperienceProps) {
    return (
        <section className="experience-section">
             <div className="experience-content-wrapper">
                
                <div className="experience-header-wrapper">
                    <img src="ui/About-Me/Experience/Work Experience.svg" className="experience-header"></img>
                </div>
                <div className="experience-list"></div>
                <div className="experience-profile">
                <h2>{position} | {date}</h2>
                
                {description.map((item, index) => {return <li key={index}>{item}</li>})}

                <p className="company">{company}</p>
            
                </div>
             </div>
            
        </section>
       
    )
}