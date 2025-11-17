'use client'
import "../gallery.css"
import Project from "../components/projects/project/project"
import { ReactNode, useState } from "react"
import Gallery from "../components/gallery"
import NavigationBar from "../components/global/NavigationBar"


const projects = [
    {
        "name" : "A Dining Sim",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "A Dining Sim",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "A LALLAAL Sim",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "CHAHAHA",
        "description" : "",
        "image" : ""
    },

    {
        "name" : "LALALA",
        "description" : "",
        "image" : ""
    }
]


export default function Projects() {
    return (
        <>
            <section className="gallery-section">
                <h1>Projects</h1>
                <Gallery list={projects} galleryType="projects"></Gallery>
            </section>
            <NavigationBar light={true}  />
        </>
        
    )
}