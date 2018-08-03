import React from 'react';

import './ToggleButton.css'

const ToggleButton = props => (
    <button className="toggle-button" onClick={props.switch}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>        
    </button>
)

export default ToggleButton;