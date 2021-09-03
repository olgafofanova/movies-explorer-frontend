import React from 'react';
import './NotFound.css';

function NotFound({ isErr }) {
    return ( 
      <div className={`notFound  ${ isErr ? '' : 'notFound_hidden'}`}>
        { isErr.Message }
      </div>
    );
}

export default NotFound;