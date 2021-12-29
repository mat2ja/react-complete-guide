import AddUser from './components/users/AddUser.js';
import UsersList from './components/users/UsersList.js';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((users) => [...users, { ...user, id: Math.random() }]);
  };

  const hasUsers = users && users.length > 0;

  return (
    <div className="container">
      <AddUser onAddUser={addUserHandler} />
      {hasUsers && <UsersList users={users} />}
    </div>
  );
}

export default App;
