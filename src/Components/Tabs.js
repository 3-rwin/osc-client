import React, { useState, useContext } from 'react'
import InputTab from './InputTab.js';
import ButtonsTab from './ButtonsTab.js';
import DataContext from '../context/DataContext';
//npm install --save @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Tabs = () => {
    const { settings, setSettings } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState("tab1");

    return (
      <div className="tabs">
        <div className="demo">Het toevoegen/wijzigen van knoppen en sturen van OSC berichten is uitgeschakeld in de Demo modus omdat er geen backend draait.</div>
        <ul className="nav">
            <li 
                className={activeTab === "tab1" ? "active" : ""}
                onClick={() => setActiveTab("tab1")}
            >
                Buttons
            </li>
            <li 
                className={activeTab === "tab2" ? "active" : ""}
                onClick={() => setActiveTab("tab2")}
            >
                Manual Input
            </li>
        </ul>
        <div 
            className='settingsButton'
            onClick={() => setSettings(!settings)}
        >
            <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="outlet">
            <ButtonsTab active={activeTab}/>
            <InputTab active={activeTab} /> 
        </div>
      </div>
    );
};

export default Tabs;