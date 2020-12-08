import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div id="meals">
      <span>TRYBE</span>
      <object type="image/svg+xml" data={ rockGlass }> </object>
    </div>
  );
}

export default App;
