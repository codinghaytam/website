import React from "react";

function talk_to(){
    return(
        <div className="">
            <form>
                    <div className="info">
                        <label htmlFor="your-name">your name</label>
                        <input type="text" className="your-name" name="your-name"/>
                        <label htmlFor="your-email">your email</label>
                        <input type="email" className="your-email" name="your-email"/>
                        <label htmlFor="subject">subject</label>
                        <input type="text" className="subject" name="subject" />
                    </div>
                    <div className="text">
                        <label htmlFor="message">your message</label>
                        <textarea className="message" name="message">

                        </textarea>
                    </div>
                </form>
        </div>
    )
}