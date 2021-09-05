
import React from 'react';
import './ButtonCollMemu.css';

function ButtonCollMemu({onCollMenuClick}) {
    return ( 
        <button onClick={onCollMenuClick} type="submit" className="button-call-menu"></button>        
    );
}

export default ButtonCollMemu;