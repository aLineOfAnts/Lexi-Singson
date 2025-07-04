import Link from "next/link"
import "./NavigationBar.css"
import "tailwindcss"

export default function NavigationBar() {
    return <div className="container">
        <Link href="/"><img src="ui/logo-art.PNG" className="logo"></img></Link>
        <nav className="navigation-bar">
            <Link href="/">Home</Link>
            <Link href="/about-me">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/artworks">Artworks</Link>
        </nav>
        
    </div>
}