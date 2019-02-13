import React from 'react';

const Scroll = (props) => (
  <div style={{overflowY: 'scroll', border: '5px solid black', height: '70vh'}}>
    {props.children}
  </div>
);

export default Scroll;