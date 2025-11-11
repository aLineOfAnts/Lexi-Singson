interface ExperienceProps {
    position : string,
    date : string,
    company : string,
    description : string
}

export default function ExperienceProfile({position, date, company, description} : ExperienceProps) {
    return (
        <div className="experience-profile">
            <p>{position} | {date}</p>
            <p>{company}</p>
            <p>{description}</p>
        </div>
    )
}