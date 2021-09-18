import Todo from './Todo';

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <ul>
        <Todo text="vue" />
        <Todo text="svelte" />
        <Todo text="gym" />
      </ul>
    </div>
  );
}

export default App;
