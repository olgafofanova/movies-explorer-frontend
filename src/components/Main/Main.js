import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({loggedIn}) {
    return ( 
        < >
        <Promo loggedIn={loggedIn}/>
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
         {loggedIn ? null : <Footer />} 
        </ >

    );
}

export default Main;