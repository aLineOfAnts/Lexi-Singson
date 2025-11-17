'use client'
import "../gallery.css"
import Project from "../components/projects/project/project"
import { ReactNode, useState } from "react"
import Gallery from "../components/gallery"


const artworks = [
    {
        "name" : "",
        "artwork" : ""
    },

    {
        "name" : "",
        "artwork" : ""
    },

    {
        "name" : "",
        "artwork" : ""
    },

    {
        "name" : "",
        "artwork" : ""
    }
]


export default function Projects() {
    return (
        <section className="gallery-section">
            <h1>Artworks</h1>
            <Gallery list={artworks} galleryType="artworks"></Gallery>
        </section>
    )
}