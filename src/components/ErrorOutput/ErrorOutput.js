import React from 'react';
import './ErrorOutput.css';

function ErrorOutput({ isErr }) {
    return ( 
      <div className={`error-output  ${ isErr ? '' : 'error-output_hidden'}`}>
        { isErr.Message }
      </div>
    );
}

export default ErrorOutput;