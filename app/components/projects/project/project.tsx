interface ProjectProps {
    title : string, 
    description : string
    image : string
}
export default function Project({title, description, image} : ProjectProps) {
    return (
        <>
            <div className="project">
                <img className="project-cover" src={image}></img>
                <div className="project-description-container">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}