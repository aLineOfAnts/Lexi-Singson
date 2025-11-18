'use client'
import Link from "next/link"
import "./NavigationBar.css"
import "tailwindcss"
import { useEffect, useState } from "react"


interface navigationProps {
    light? : boolean
}
export default function NavigationBar({light} : navigationProps) {
    
    const Style = () => {
        if (light) {
            console.log("light");
            return "navigation-bar navigation-bar-light";
        } else {
            console.log("dark");
            return "navigation-bar";
            
        }
    }

    return <div className="container">
        <Link href="/"><img src="ui/logo-art.PNG" className="logo"></img></Link>
        <nav className={Style()} id="navigation-bar">
            <Link href="/">Home</Link>
            <Link href="/about-me">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/artworks">Artworks</Link>
        </nav>
        
    </div>
}


