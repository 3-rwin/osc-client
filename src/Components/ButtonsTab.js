import React, { useState, useEffect } from 'react'
import Buttons from './Buttons.js'

const ButtonsTab = ( activeTab ) => {
  return (
    <div className={`buttonTab ${activeTab.active=== "tab2" ? "notActive" : ""} `}>
      <Buttons />
    </div>
  )
}

export default ButtonsTab