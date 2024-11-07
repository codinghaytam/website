import React from "react";
import logo from './assets/logo.svg'
import "./css/topbar.css"

const links=[
    {name:"about",ad:""},
    {name:"contact",ad:""},
    {name:"home",ad:""},
]

const Link= ({ link: {name,ad}})=>{
    return(
        
            <li>
            <a href={ad}>{name}</a>
            </li>
        
    )
}

const Linklist=({list})=>{
    const resultat=list.map((link)=>(
        <Link key={crypto.randomUUID()} link={link}/>
    ))
    return <ul>{resultat}</ul>;
}

function TopBar(){
    return(
        <div className="topbar">
            <div className="logo">
            <img src={logo}>
            </img>
             
            </div>
            <div className="links">
                
                    <Linklist list={links}/>
                
            </div>
        </div>
    )
} 

export default TopBar