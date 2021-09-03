import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
    return ( 
        <nav>
          <ul className="top-menu">
            <li className="top-menu-item">
            <NavLink exact to="/movies" activeClassName="top-menu-link_accent" className="top-menu-link">Фильмы</NavLink> 
            </li>
            <li className="top-menu-item">
            <NavLink exact to="/saved-movies" activeClassName="top-menu-link_accent" className="top-menu-link">Сохранённые фильмы</NavLink>
            </li>                   
          </ul>
        </nav> 
    );
}

export default NavTab;