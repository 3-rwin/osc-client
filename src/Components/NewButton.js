import React, { useState, useContext } from 'react'
import DataContext from '../context/DataContext';
import api from '../api/buttons';

const NewButton = () => {
    const [buttonIp, setButtonIp]  = useState('');
    const [buttonPort, setButtonPort]  = useState('');
    const [buttonDescription, setButtonDescription]  = useState('');
    const [buttonMessage, setButtonMessage]  = useState('');
    const [buttonColor, setButtonColor]  = useState('');

    const { buttons, setButtons } = useContext(DataContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = buttons.length ? buttons[buttons.length - 1].id + 1 : 1;
        const newButton = {id: id, ip: buttonIp, port: buttonPort, description: buttonDescription, message: buttonMessage, color: buttonColor };
        try {
        // Use Axios to send the new data to the json file
        const response = await api.post('/buttons', newButton);
        const allButtons = [ ...buttons, response.data ];

        console.log(allButtons)
        setButtons(allButtons);
        setButtonIp('');
        setButtonPort('');
        setButtonDescription('');
        setButtonMessage('');
        setButtonColor('');
        } catch (err) {
        console.log(`Error: ${err.message}`)
        }
    }

    const [showInputField, setshowInputField] = React.useState(false)

    const showInput = () => {
        showInputField ? setshowInputField(false) : setshowInputField(true);
    }

    const NewButtonInput = () => (
        <div className="newButtonInput">
            <form className="newButtonForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                required
                id="ipAddr" 
                placeholder="Insert IP address"
                value={buttonIp}
                onChange={(e) => setButtonIp(e.target.value)}
            />
            <input 
                type="text" 
                required
                id="port" 
                placeholder="Insert port"
                value={buttonPort}
                onChange={(e) => setButtonPort(e.target.value)}
            />
            <input 
                type="text" 
                id="description" 
                placeholder="Insert Description"
                value={buttonDescription}
                onChange={(e) => setButtonDescription(e.target.value)}
            />
            <input 
                type="text" 
                required
                id="message" 
                placeholder="Insert Message"
                value={buttonMessage}
                onChange={(e) => setButtonMessage(e.target.value)}
            />
            <input 
                type="text" 
                id="color" 
                placeholder="Insert color name or hex code"
                value={buttonColor}
                onChange={(e) => setButtonColor(e.target.value)}
            />
            <button type="submit">Create Button</button>
        </form>
        </div>
      )

    return (
        <>
            <button 
                className='buttonAdd' 
                title="Add new button"
                onClick={showInput} 
            >
                { showInputField ? "-" : "+" }
            </button>
            { showInputField ? NewButtonInput() : null }
        </>
    )
}

export default NewButton