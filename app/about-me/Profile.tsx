import "./about-me.css"

export default function Profile() {
    return (
        <section className="about-me-profile">
            <img src="/ui/About-Me/Profile Background.png" className="background"></img>
            <div className="about-me-profile-wrapper">
                <div>
                    <img src="ui/About-Me/AboutMeCurve.png" className="label"></img>
                    <img src="ui/About-Me/Portrait.png" className="portrait"></img>
                </div>

                <div className="info">
                    <img src="ui/About-Me/Greeting.Svg"></img>
                    <p>
                        My name is Lexi, I’m an upcoming Computer <br></br>
                        Science student specializing in Software Engineering! I like to make things, like draw and code. I also take an interest in tabletop RPGs. I like to walk outdoors and eat sweets. and etc etc blah blah omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.

    omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptatesdebitis.
                    </p>
                </div>
            </div>
            <img src="ui/About-Me/LexiSingson2.png" className="ui-decor-one"></img>
            <img src="ui/About-Me/sprite.png" className="ui-decor-two"></img>
        </section>
    )
}