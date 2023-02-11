
import './App.css';

import { useState, useEffect } from 'react';
import Navigate from './Navigation';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoarding, setIsOnBoarding] = useState(true)
  const handleClick = () => {
    setTimeout(() => {

      const el = document.getElementById('options');
      console.log(el)
      if (el) {
        el.click();
      }
    }, 200)
  }
  // useEffect(() => {

  // }, [])
  return (
    <div className="App">
      <div className="">
        <div className="" id="google_element" onClick={handleClick}></div>
      </div>
      <Navigate isLoggedIn={isLoggedIn} onBoarding={onBoarding} />
    </div>
  );
}

export default App;
