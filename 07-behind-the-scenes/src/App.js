import { useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput.js';
import Button from './components/UI/Button/Button.js';

function App() {
  const [showP, setShowP] = useState(false);

  const toggleParaHandler = () => setShowP((prev) => !prev);

  console.log('app running 🏃');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParaHandler}>Toggle paragraph 🙉</Button>
      <DemoOutput show={showP} />
    </div>
  );
}

export default App;
