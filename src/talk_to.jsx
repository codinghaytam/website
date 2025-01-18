import React, { useRef, useState } from "react";
import './css/talk_to.css'
import { Element } from "react-scroll";

function Talk_to(){
    const [alertMessage, setAlertMessage] = useState("");
    const inputs= useRef(null)
    const textA=useRef(null)

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          textA.current.value=""
          inputs.current.value=""
        } 
      };

    return (
        <Element name="contact">
          <div className="emailcontaine">
              <h1>lets talk</h1>
              <form className="form" onSubmit={onSubmit}>
                  <div className="inputs">
                      <div>
                          <input name="name" className="input title" type="text" placeholder="Name" ref={inputs}/>
                          <input name="email" className="input email" type="email" placeholder="E-Mail I.D." ref={inputs}/>
          
                      </div>
                      <textarea className="textarea" placeholder="Enter message" name="message" ref={textA}></textarea>
          
                  </div><center><button className="button" type="submit">Submit</button></center>
              </form>
              {alertMessage && <SimpleAlert message={alertMessage} duration={3000} />}

          </div>
        </Element>
    )
}

export default Talk_to