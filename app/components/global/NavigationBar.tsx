'use client'
import Link from "next/link"
import "./NavigationBar.css"
import "tailwindcss"


interface navigationProps {
    light? : boolean
}
export default function NavigationBar(light : navigationProps) {

    const insertNavStyle = () => {
        if (light) 
        {
            return "navigation-bar navigation-bar-light"
        } else {
            return "navigation-bar"
        } 
    }

    return <div className="container">
        <Link href="/"><img src="ui/logo-art.PNG" className="logo"></img></Link>
        
        <nav className={insertNavStyle()}>
            <Link href="/">Home</Link>
            <Link href="/about-me">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/artworks">Artworks</Link>
        </nav>
        
    </div>
}