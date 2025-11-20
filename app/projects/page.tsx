'use client'
import "../gallery.css"
import Project from "../components/projects/project/project"
import { ReactNode, useState } from "react"
import Gallery from "../components/gallery"
import NavigationBar from "../components/global/NavigationBar"


const projects = [
    {
        "name" : "A Dining Sim",
        "description" : "Be a waiter and deliver dishes in a resturaunt full of bugs",
        "image" : ""
    },

    {
        "name" : "Stop Rush",
        "description" : "Reincarnate into a car and traverse the underworld",
        "image" : undefined
    },

    {
        "name" : "Tug Of Love",
        "description" : "You and your partner are on a date",
        "image" : "ui/Projects/Projects/Forecast.png"
    },


    {
        "name" : "Forecast",
        "description" : "Weather App",
        "image" : "ui/Projects/Projects/Forecast.png"
    },

    {
        "name" : "Block Blast Prototype",
        "description" : "A study of Block Blast",
        "image" : "ui/Projects/Projects/DeliveryDash.png"
    },

    {
        "name" : "Delivery Dash",
        "description" : "Be a delivery boy and deliver packages",
        "image" : "ui/Projects/Projects/DeliveryDash.png"
    },


    {
        "name" : "Slice",
        "description" : "A portfolio website consisting of works from a SHS subject",
        "image" : "ui/Projects/Projects/Slice.png"
    },

    {
        "name" : "FlappyRat",
        "description" : "4 Player Coop Game",
        "image" : "ui/Projects/Projects/FlappyRat.png"
    },

    {
        "name" : "Royalchemy",
        "description" : "A Medieval Crafting Game consisting of the elements of the Periodic Table",
        "image" : "ui/Projects/Projects/Royalchemy.png"
    },

    {
        "name" : "Catfish",
        "description" : "Be a cat and lure fish into dating you!",
        "image" : "ui/Projects/Projects/Forecast.png"
    },

    {
        "name" : "Build Mode",
        "description" : "Make rooms and place walls",
        "image" : "ui/Projects/Projects/BuildMode.png"
    },

    {
        "name" : "Catch",
        "description" : "Be a fisherman and catch fish!",
        "image" : "ui/Projects/Projects/Royalchemy.png"
    },

    {
        "name" : "The Forest",
        "description" : "You are camping in the woods with a monster",
        "image" : "ui/Projects/Projects/Royalchemy.png"
    },
    
    {
        "name" : "Lavenderland",
        "description" : "A simple platformer game",
        "image" : "ui/Projects/Projects/Royalchemy.png"
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