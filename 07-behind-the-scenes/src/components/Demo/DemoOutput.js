import React from 'react';
import MyP from './MyP.js';

const DemoOutput = ({ show }) => {
  console.log('demo output 🏎️');

  return <MyP>{show ? '🧨 Petarda 🧨' : ''}</MyP>;
};

export default React.memo(DemoOutput);
