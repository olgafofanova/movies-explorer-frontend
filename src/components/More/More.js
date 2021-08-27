import React from 'react';
import './More.css';

function More({ onClick }) {
    return ( 
      <div className="more">
        <button type="submit" className="more__button" onClick={onClick}>Ещё</button>
      </div>
    );
}

export default More;