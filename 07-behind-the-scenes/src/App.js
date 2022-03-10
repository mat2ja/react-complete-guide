import { useCallback, useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button.js';

function App() {
  const [showP, setShowP] = useState(false);
  const toggleParaHandler = useCallback(
    () => setShowP((prev) => !prev),
    [setShowP]
  );

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParaHandler}>Toggle paragraph 🙉</Button>
      {showP && <p>🧨 Petarda 🧨</p>}
    </div>
  );
}

export default App;
