import React from "react";
import './css/talk_to.css'
function Talk_to(){
    return (
        <div className="emailcontaine">
            <h1>lets talk</h1>
            <form className="form">
                <div className="inputs">
                    <div>
                        <input className="input title" type="text" placeholder="Name"/>
                        <input className="input email" type="email" placeholder="E-Mail I.D."/>
                    
                    </div>
                    <textarea className="textarea" placeholder="Enter message"></textarea>
                    
                </div><center><button className="button">Submit</button></center>
            </form>
        </div>
    )
}

export default Talk_to