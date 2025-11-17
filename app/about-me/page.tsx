import Profile from "./Profile" //Fix this
import Languages from "./Languages"
import Tools from "./Tools"
import Experience from "./Experience"
import NavigationBar from "../components/global/NavigationBar"

export default function AboutMe() {
    return (
        <>
            <Profile/>
            <Languages/>
            <Tools></Tools>
            <Experience/>
            <NavigationBar light={false}></NavigationBar>
        </>
    )
}