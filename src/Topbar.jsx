import React, { useEffect, useState } from "react";
import logo from './assets/logo.svg'
import "./css/topbar.css"
import { useRef } from "react";



const LinklistBox=({list})=>{
    const resultat=list.map((link)=>(
        <Link key={crypto.randomUUID()} link={link}/>
    ))
    return <ul>{resultat}</ul>;
}

function Burger(){
    
    return (
        <label className="burger" htmlFor="burger" >
            <input type="checkbox" id="burger"></input>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}


const links=[
    {name:"about",ad:""},
    {name:"contact",ad:""},
    {name:"home",ad:""},
]

const Link= ({ link: {name,ad}})=>{
    return(
        
            <li className="link">
            <a href={ad}>{name}</a>
            </li>
        
    )
}

const Linklist=({list})=>{
    const resultat=list.map((link)=>(
        <Link key={crypto.randomUUID()} link={link}/>
    ))
    return <ul >{resultat}</ul>;
}



function TopBar(){

    const elementRef = useRef(null);

    // Toggle height between 0 and 100 on click
    const handleClick = () => {
      if (elementRef.current) {
        const currentHeight = elementRef.current.style.height;
        elementRef.current.style.height = currentHeight === '0px' ? '100px' : '0px';
        console.log(elementRef.current.style.height)
      }
    };
    
    return(
        <>
        <div className="topbar">
            <div className="logo">
            <img src={logo}>
            </img>
             
            </div>
            <div className="links">
                
                    <Linklist list={links}/>
                
            </div>
            <div className="links-button" onMouseDown={handleClick}>
                <Burger/>
            </div>
        </div>
                <div className="LinkBox"  ref={elementRef}>
                    <LinklistBox list={links} />
                </div>
            </>
    )
} 

export default TopBar