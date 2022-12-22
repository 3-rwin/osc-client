import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from '../context/DataContext';

const Buttons = () => {
  const { buttons, fetchError, isLoading } = useContext(DataContext);
  return (
    <div>
        {isLoading && <p className="statusMsg">Loading Buttons...</p>}
        {!isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
        {!isLoading && !fetchError && (buttons.length ? <Feed buttons={buttons} /> 
        : <p className="statusMsg">No Buttons to display</p>)}
    </div>
  )
}

export default Buttons