import "./experience-profile.css"

interface ExperienceProps {
    position : string,
    date : string,
    company : string,
    description : string[]
}

export default function ExperienceProfile({position, date, company, description} : ExperienceProps) {
    return (
        
        <div className="experience-profile">
            <h2>{position} | {date}</h2>

            <div className="experience-description-list">
                {description.map((item, index) => {return <ul key={index}>{item}</ul>})}
            </div>       
            

            <p className="company">{company}</p>
            
        </div>
             
       
    )
}