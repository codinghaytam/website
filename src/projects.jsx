import React from "react";
import './css/project.css'
import 'normalize.css'

const projects=[
    {
        title:"Abc",
        description:"hello",
        image:"https://picsum.photos/200/150"
    },
    {
        title:"Abc",
        description:"hello",
        image:"https://picsum.photos/200/150"
    },
    {
        title:"Abc",
        description:"hello",
        image:"https://picsum.photos/200/150"
    },
    {
        title:"Abc",
        description:"hello",
        image:"https://picsum.photos/200/150"
    },
]
const Card=({project})=>{
    return(
        <div className="card">
  <div className="card-info">
    <img src={project.image}></img>
    <h2 className="title">{project.title}</h2>
    <p className="desc">{project.description}</p>
  </div>
</div>
    )
}

const Cards=({prs})=>{
    const result=prs.map((pr)=>(
        <Card key={crypto.randomUUID()} project={pr}></Card>
    ))
    return <div className="cards container scroll-1">
            {result}
    </div>
}


function Projects(){
    return (
        <div className="background" id="project">
            <div className="filter">
                <div className="background-grid">
                <h1>Projects</h1>
                <Cards prs={projects}/>
                </div>
            </div>
        </div>)
}


export default Projects