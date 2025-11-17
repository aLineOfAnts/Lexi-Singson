interface ProjectProps {
    title : string, 
    description : string
    image : string
}
export default function Project({title, description, image} : ProjectProps) {
    return (
        <>
            <div className="gallery-item">
                <img className="gallery-item-cover" src={image}></img>
                <div className="gallery-item-description-container">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}