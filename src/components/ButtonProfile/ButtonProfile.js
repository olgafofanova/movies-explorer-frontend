
import React from 'react';
import './ButtonProfile.css';
import { NavLink } from 'react-router-dom';

function ButtonProfile() {
    return ( 
        <NavLink exact to="/profile" className="button-profile">
          <p className="button-profile__title">Аккаунт</p>
        </NavLink> 
    );
}

export default ButtonProfile;