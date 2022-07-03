import React from 'react';

const MyP = ({ children }) => {
  console.log('⏳ my paragraph running');

  return <p>{children}</p>;
};

export default MyP;
