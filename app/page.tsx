import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/global/NavigationBar";
import './home.css'

export default function Home() {
  return (
    <>
      
      <div className="home-container">
      
      <div>
        <h1 className="home-logo">Lexi <br></br> Singson</h1>
        <h2>Artist & Programmer</h2>
        <Link href="/about-me"><img src="/ui/closed-door.PNG"></img></Link>
      </div>
      <div>
        <img src="/ui/Group 10.PNG" className="home-background-art"></img>
      </div>
    </div>
    <NavigationBar light={false}  />
    </>
    
  );
}
