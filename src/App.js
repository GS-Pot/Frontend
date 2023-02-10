
import './App.css';

import { useState } from 'react';
import Navigate from './Navigation';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoarding, setIsOnBoarding] = useState(true)

  return (
    <div className="App">
      <Navigate isLoggedIn={isLoggedIn} onBoarding={onBoarding} />
    </div>
  );
}

export default App;
