
import React from 'react';
import './ButtonProfile.css';

function ButtonProfile() {
    return ( 
        <a  className="button-profile" href="/profile" target="_self">
          <p className="button-profile__title">Аккаунт</p>
        </a> 
    );
}

export default ButtonProfile;