import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox () {
    return ( 
       <label  className="filter-checkbox">  
         <p className="filter-checkbox__title">Короткометражки</p>        
         <input type="checkbox" className="filter-checkbox__checkbox"/>
         <div className="filter-checkbox__switch">
           <div className="filter-checkbox__circle">      
           </div>
         </div>
        </label>
    );
}

export default FilterCheckbox ;