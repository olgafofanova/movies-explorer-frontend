import React from 'react';
import './More.css';

function More({ onClick, isHidden }) {
    return ( 
      <div className="more">
        <button type="submit" className={`more__button  ${ isHidden ? 'more__button_hidden' : ''}`}  onClick={onClick}>Ещё</button>
      </div>
    );
}

export default More;