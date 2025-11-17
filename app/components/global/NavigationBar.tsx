'use client'
import Link from "next/link"
import "./NavigationBar.css"
import "tailwindcss"
import { useEffect, useState } from "react"


interface navigationProps {
    light? : boolean
}
export default function NavigationBar(light : navigationProps) {
    const [style, changeStyle] = useState<string>("navigation-bar");

    const ChangeColor = (isLight : boolean) => {
        if (isLight) 
        {
            changeStyle("navigation-bar navigation-bar-light")
            console.log("light")
        } else {
            changeStyle("navigation-bar");
            console.log("dark");
        }
    }

    return <div className="container">
        <Link href="/"><img src="ui/logo-art.PNG" className="logo"></img></Link>
        <nav className={style} id="navigation-bar">
            <Link href="/" onClick={() => {ChangeColor(false)}}>Home</Link>
            <Link href="/about-me" onClick={() => {ChangeColor(false)}}>About Me</Link>
            <Link href="/projects" onClick={() => {ChangeColor(true)}}>Projects</Link>
            <Link href="/artworks" onClick={() => {ChangeColor(true)}}>Artworks</Link>
        </nav>
        
    </div>
}


