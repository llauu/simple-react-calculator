import React from 'react';
import '../styles/clear.css';

const Clear = (props) => (
  <div onClick={() => props.clickHandler()} className='clear-button'>
    C
  </div>
);

export default Clear;
