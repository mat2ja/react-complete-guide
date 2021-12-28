import Card from '../UI/Card.js';
import c from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={c['input-card']}>
      <form onSubmit={addUserHandler}>
        <div className={c['input-group']}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" autoComplete="off" />
        </div>
        <div className={c['input-group']}>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" autoComplete="off" />
        </div>
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
