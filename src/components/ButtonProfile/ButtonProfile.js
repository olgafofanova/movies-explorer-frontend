
import React from 'react';
import './ButtonProfile.css';
import icon from '../../images/icon-profile.png';

function ButtonProfile() {
    return ( 
 
<a  className="button-profile" href="/movies" target="_blank">
<div className="button-profile__container">
    <p className="button-profile__title">Аккаунт</p>
    <img  className="button-profile__img" src={icon}  alt="Аккаунт"/>

</div> 
</a> 
        
    );
}

export default ButtonProfile;