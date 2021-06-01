import { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('App Component re-rendered!')
  const handleButtonClick = useCallback(() => {
    setShowParagraph(prevState => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi There!</h1>
      <DemoOutput show={false} />
      <Button onClick={handleButtonClick}>Click</Button>
    </div>
  );
}

export default App;
