import React from 'react';
import Card from './components/UI/Card.js';
import AddUser from './components/users/AddUser.js';

function App() {
  return (
    <div className='container'>
      <Card>
        <AddUser />
      </Card>
    </div>
  );
}

export default App;
