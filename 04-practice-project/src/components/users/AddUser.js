const AddUser = ({ addUserHandler }) => {
  return (
    <form onSubmit={addUserHandler}>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" autoComplete="off" />
      </div>
      <div className="input-group">
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" autoComplete="off" />
      </div>
      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUser;
