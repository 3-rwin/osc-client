import React, { useContext } from 'react'
import { sendOscMessage } from '../context/socketio.js'
import DataContext from '../context/DataContext';
import api from '../api/buttons'

const Button = ({ button }) => {
  const { buttons, setButtons, settings } = useContext(DataContext);

  const createOscMessage = () => {
    const ip = button.ip;
    const port = button.port;
    const message = button.message;
    sendOscMessage(ip, port, message);
  }

  const handleDelete = async (event, id) => {
    //Stop the div from being 'pressed' as well
    event.stopPropagation();
    try {
    // Use axios to delete an entry from the JSON file
    await api.delete(`/buttons/${id}`);
    const buttonsList = buttons.filter(buttons => buttons.id !== id);
    setButtons(buttonsList);
    } catch (err) {
    console.log(`Error: ${err.message}`)
    }
  }

  const handleUp = async (event, id) => {
    event.stopPropagation();
    try {
      // Use axios to edit an entry from the JSON file
      const buttonsList = await api.put(`/buttons/up/${id}`);
      console.log(buttonsList.data.buttons)
      setButtons(buttonsList.data.buttons);
      } catch (err) {
      console.log(`Error: ${err.message}`)
      }
    }

    const handleDown = async (event, id) => {
      event.stopPropagation();
      try {
        // Use axios to edit an entry from the JSON file
        const buttonsList = await api.put(`/buttons/down/${id}`);
        console.log(buttonsList.data.buttons)
        setButtons(buttonsList.data.buttons);
        } catch (err) {
        console.log(`Error: ${err.message}`)
        }
      }

  return (
    <>
    <div 
      className='button' 
      style={{background: button.color}} 
      title={button.ip + '\n' + button.port + '\n' + button.message}
      onClick={createOscMessage} 
    >
       <div className='buttonDest' >{button.ip}:{button.port} </div>
       <div className='buttonDescription' >{button.description ? button.description : " "}</div>
       <div className='buttonMessage' >{button.message} </div>
       <div className={settings ? "deleteButton" : "notActive"} title="Delete Button" onClick={(event) => handleDelete(event, button.id)}>X</div>
       <div className={settings ? "upButton" : "notActive"} title="Up Button" onClick={(event) => handleUp(event, button.id)}>/\</div>
       <div className={settings ? "downButton" : "notActive"} title="Down Button" onClick={(event) => handleDown(event, button.id)}>\/</div>
    </div>
    </>
  )
}

export default Button