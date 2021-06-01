import { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('Component re-rendered!')
  const handleButtonClick = () => {
    setShowParagraph(prevState => !prevState);
  }
  return (
    <div className="app">
      <h1>Hi There!</h1>
      {showParagraph && <p>This is brand new</p>}
      <Button onClick={handleButtonClick}>Click</Button>
    </div>
  );
}

export default App;
