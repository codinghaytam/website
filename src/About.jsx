import React from "react";
import './css/about.css'

const text=`

I’m Mohamed Haytam Soukrati, a software engineer with a strong passion for game development and a commitment to building efficient, scalable, and user-friendly software.

Driven by a love for problem-solving and creativity, I thrive in collaborative environments and continually seek opportunities to learn, innovate, and create impactful solutions. I’m especially passionate about developing engaging and immersive game experiences.

Thank you for visiting my portfolio. Feel free to explore my work and reach out to connect!

`

function About(){
    return(
        <div className="About">
            <h1>
                About Me
            </h1>
            <div className="identity">
                <img src="/myimage.jpg" id="myImage"></img>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default About