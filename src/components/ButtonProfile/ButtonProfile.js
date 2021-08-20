
import React from 'react';
import './ButtonProfile.css';
import icon from '../../images/icon-profile.png';

function ButtonProfile() {
    return ( 
        <a  className="button-profile" href="/movies" target="_blank">
          <p className="button-profile__title">Аккаунт</p>
        </a> 
    );
}

export default ButtonProfile;