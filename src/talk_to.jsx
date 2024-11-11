import React from "react";
import './css/talk_to.css'
function Talk_to(){
    return (
        <div>
            
            <form className="form">
                <input className="input" type="text" placeholder="Name"/>
                <input className="input" type="text" placeholder="E-Mail I.D."/>
                <textarea className="textarea" placeholder="Enter message"></textarea>
                <center><button className="button">Submit</button></center>
            </form>
        </div>
    )
}

export default Talk_to