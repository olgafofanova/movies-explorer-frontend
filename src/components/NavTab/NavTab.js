import React from 'react';
import './NavTab.css';

function NavTab() {
    return ( 
        <nav>
          <ul className="top-menu">
            <li className="top-menu-item">
              <a className="top-menu-link top-menu-link_accent" href="/movies" target="_self">
                Фильмы
              </a> 
            </li>
            <li className="top-menu-item">
              <a className="top-menu-link" href="/saved-movies" target="_self">
                Сохранённые фильмы 
              </a> 
            </li>                   
          </ul>
        </nav> 
    );
}

export default NavTab;