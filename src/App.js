import { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List');
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  console.log('App Component re-rendered!')
  const handleButtonClick = useCallback(() => {
    if(allowToggle) {
      setShowParagraph(prevState => !prevState);
    }
  }, [allowToggle]);

  const handleToggle = () => {
    setAllowToggle(true);
  }

  const changeTitleHandler = () => {
    setListTitle('New revised Title');
  }

  return (
    <div className="app">
      <h1>Hi There!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>

      <DemoOutput show={showParagraph} />
      <Button onClick={handleButtonClick}>Click</Button>
      <Button onClick={handleToggle}>Allow Toggle</Button>
    </div>
  );
}

export default App;
