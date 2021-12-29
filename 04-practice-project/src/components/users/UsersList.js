import Card from '../UI/Card.js';
import c from './UsersList.module.css';

const UsersList = ({ users }) => {
  return (
    <Card className={c.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} → {user.age} yo
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
