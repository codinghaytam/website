import React from "react";


const text=`

I’m Mohamed Haytam Soukrati, a software engineer with a strong passion for game development and a commitment to building efficient, scalable, and user-centered applications. With skills in front-end and back-end technologies, including JavaScript, Python, and SQL, I work with frameworks and tools like React, Django, and Microsoft SQL Server.

Driven by a love for problem-solving and creativity, I thrive in collaborative environments and continually seek opportunities to learn, innovate, and create impactful solutions. I’m especially passionate about developing engaging and immersive game experiences.

Thank you for visiting my portfolio. Feel free to explore my work and reach out to connect!

`

function About(){
    return(
        <div>
            <h1>
                About Me
            </h1>
            <div>
                <img></img>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default About