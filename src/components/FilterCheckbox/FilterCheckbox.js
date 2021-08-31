import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox ({onFilterCheckbox, isFilterChecked}) {
    return ( 
       <label  className="filter-checkbox">  
         <p className="filter-checkbox__title">Короткометражки</p>        
         <input type="checkbox" className="filter-checkbox__checkbox" onChange={onFilterCheckbox} checked={ isFilterChecked }/>
         <div className="filter-checkbox__switch">
           <div className="filter-checkbox__circle">      
           </div>
         </div>
        </label>
    );
}

export default FilterCheckbox ;