import React from 'react';
import MyP from './MyP.js';

const DemoOutput = React.memo(({ show }) => {
  console.log('demo output ');

  return <MyP>{show ? '🧨 Petarda 🧨' : ''}</MyP>;
});

export default DemoOutput;
