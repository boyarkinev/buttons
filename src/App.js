import React, {useState} from 'react';
import './App.css';

function App() {
  const data = ['42', '43', '44'];
  const [isActive, setIsActive] = useState({id: null})
  
  const handleClick = (e) => { 
    setIsActive({id: e.target.id})
  }
  
  return (
    <div>
      {data.map((item) => (
        <button
          id={item}
          onClick={handleClick}
          key={item}
          className={ isActive.id === item ? 'btn btn_is-Pressed' : 'btn' }>
          {item}
        </button>
      ))}
    </div>
  );
}

export default App;
