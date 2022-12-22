import React from 'react'
import { sendOscMessage, clearReceived } from '../context/socketio.js'

const InputTab = ( { active } ) => {
  const createOscMessage = (e) => {
    e.preventDefault();
    const ip = document.getElementById("ipAddr").value || "127.0.0.1" ;
    const port = document.getElementById("port").value || "3333";
    const message = document.getElementById("message").value || "default message";
    sendOscMessage(ip, port, message);
  }

  return (
    <form className={`inputTab ${active === "tab1" ? "notActive" : ""} `} onSubmit={createOscMessage}>
        <div className="input">
          <input 
            type="text" 
            required 
            id="ipAddr" 
            placeholder="Insert IP address"
          />
          <input 
            type="text" 
            required
            id="port" 
            placeholder="Insert port"
          />
          <input 
            type="text" 
            required
            id="message" 
            placeholder="Insert message"
          />
          <button type="submit">Send Message</button>
        </div>
        <section className="outputSection">
          <div className="outputTitle">Received messages:</div>
          <div id="output" className="output">
          </div>
          <button className="clearBtn" onClick={clearReceived}>Clear</button>
        </section> 
    </form>
  )
}

export default InputTab