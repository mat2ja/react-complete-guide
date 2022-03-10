import React from 'react';

const MyP = ({ children }) => {
  console.log('my paragraph! ⏳');

  return <p>{children}</p>;
};

export default MyP;
