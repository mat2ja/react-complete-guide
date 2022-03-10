import { useCallback, useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput.js';
import Button from './components/UI/Button/Button.js';

const App = () => {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => setAllowToggle(true);

  console.log('app running 🏃');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow toggle ✅</Button>
      <Button onClick={toggleParaHandler}>Toggle paragraph 🙉</Button>
      <DemoOutput show={showP} />
    </div>
  );
};

export default App;
