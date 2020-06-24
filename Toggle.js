import React from 'react';
import LightSwitch from '../UI/LightSwitch';

const toggle = ({theme, toggledTheme, toggledColor}) => {
    return(
        <LightSwitch
            clicked={toggledTheme} 
            color={toggledColor}/>
    );
}

export default toggle;