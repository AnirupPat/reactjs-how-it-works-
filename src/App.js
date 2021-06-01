import { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('App Component re-rendered!')
  const handleButtonClick = useCallback(() => {
    if(allowToggle) {
      setShowParagraph(prevState => !prevState);
    }
  }, [allowToggle]);

  const handleToggle = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi There!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={handleButtonClick}>Click</Button>
      <Button onClick={handleToggle}>Allow Toggle</Button>
    </div>
  );
}

export default App;
