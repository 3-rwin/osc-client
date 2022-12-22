import io from 'socket.io-client';

var socket = io(window.location.hostname + ':4000');

socket.on('connect', function() {
     // sends to socket.io server the host/port of oscServer
     // and oscClient
     socket.emit('config',
         {
             server: {
                 port: 3333,
                 host: '127.0.0.1'
             },
             client: {
                 port: 3334,
                 host: '127.0.0.1'
             }
         }
     );
 });

 socket.on('message', function(obj) {
    const receivedData = obj.split("\n")

    const fromDiv = document.createElement("div");
    fromDiv.className = "from";
    const dataDiv = document.createElement("div");
    dataDiv.className = "data";

    const newFromContent = document.createTextNode(receivedData[0]);
    fromDiv.appendChild(newFromContent);
    let newDataContent = receivedData[1].replace(/,/g, ' ');
    newDataContent = document.createTextNode(newDataContent);
    dataDiv.appendChild(newDataContent);

    const outputDiv = document.getElementById("output");
    outputDiv.appendChild(fromDiv)
    outputDiv.appendChild(dataDiv)

    // On a new message, scroll down
    outputDiv.scrollTop = outputDiv.scrollHeight;
 });

 export const sendOscMessage = (ip, port, message) => {
  socket.emit('message', ip, port, message);
 }

 export const clearReceived = () => {
    const outputDiv = document.getElementById("output");
    const fromDiv = document.getElementsByClassName("from");
    const dataDiv = document.getElementsByClassName("data");
    
    // Only clear divs if they exist
    if (fromDiv.length) {
      // Length is 5, but array locations are 0 to 4
      for (let i = fromDiv.length-1; i >= 0; i--) {
        outputDiv.removeChild(fromDiv[i]);
        outputDiv.removeChild(dataDiv[i]);
      };
    }
 }