import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';

function Main({loggedIn, onCollMenuClick}) {
    return ( 
        < >
        <Promo loggedIn={loggedIn} onCollMenuClick={onCollMenuClick}/>
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
          <Footer />


        </ >

    );
}

export default Main;