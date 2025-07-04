import Link from "next/link"
import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer-container">
            <div>
                <img src="ui/logo-art.PNG" className="logo-art"></img>
                <div>
                    <h1>Lexi Singson</h1>
                    <p>LexiSingsonAtWork@gmail.com</p>
                </div>
            </div>

            <div>
                <div>
                    <h2>Directory</h2>
                    <img src="ui/Line 1.svg" className="line-divider"></img>
                </div>

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about-me">About Me</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/artworks">Artworks</Link>
                </nav>

            </div>
            
        </div>
    )
}