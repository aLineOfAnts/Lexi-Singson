interface ArtworkProps {
    title : string, 
    image : string | undefined
}
export default function Artwork({title, image} : ArtworkProps) {
    return (
        <>
            <div className="gallery-item">
                <img className="gallery-item-cover art" src={image}></img>
                
            </div>
        </>
    )
}