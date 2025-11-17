'use client'
import { ReactNode } from "react";
import { useState } from "react";
import Project from "./projects/project/project";



interface GalleryProps {
    list : any[]
    galleryType : string
}
export default function Gallery({list, galleryType} : GalleryProps) {
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(1);
    const pages = Math.round(list.length / 5)
    

    const CheckPage = (newIndex : number) => {
        const leftArrow = document.getElementById("projects-left-arrow")
            if (leftArrow) {
            if (newIndex <= 0) {
                leftArrow.classList.remove("shown");
                leftArrow.classList.add("hidden");
            } else {
                leftArrow.classList.add("shown");
                leftArrow.classList.remove("hidden");
            }
        }
        

        const rightArrow = document.getElementById("projects-right-arrow")
        if (!rightArrow) { return }
        if (newIndex + 6 >= list.length || newIndex >= list.length) {
            rightArrow.classList.remove("shown");
            rightArrow.classList.add("hidden");
        } else {
            rightArrow.classList.remove("hidden");
            rightArrow.classList.add("shown");
        }
            
        
    }

    const DisplayGallery = () => {
        if (galleryType == "projects") {
            console.log("projects");
            return <>{list.slice(index, index+6).map((item, index) => { return <Project key={index} title={item.name} description={item.description} image={item.image}></Project>})}</>
            
        } else if (galleryType == "artworks") {
            return <></>
        }
        return <></>
    }
        
    
    return (
            <div className="projects-content-wrapper">
                <div className="projects-list">
                    {DisplayGallery()}
                    
                </div>
                <div className="projects-list-page-indicator">
                    <div>
                            <input type="image" src="/ui/Projects/ui/Arrow left.svg" className="hidden" id="projects-left-arrow" 
                        onClick={() => {
                            if (index <= 0) { return; }
                            const newIndex = index - 6
                            setIndex(newIndex)
                            setPage(page - 1)
                            CheckPage(newIndex)
                        }}></input>
                    </div>
                    <div>
                        <p>{page} of {pages}</p>
                    </div>
                    <div>
                        <input type="image" src="/ui/Projects/ui/Arrow right.svg"  id="projects-right-arrow" onClick={() => {
                        const newIndex = index + 6
                        if (newIndex > list.length) { return }
                        if (newIndex >= list.length) { return }
                        setIndex(newIndex);
                         setPage(page + 1)
                        CheckPage(newIndex)
                    }}></input>
                    </div>
                    
                    

                </div>
            </div>
    )
}
