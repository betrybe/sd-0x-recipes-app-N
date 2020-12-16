import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object type="image/svg+xml" data={ rockGlass }> </object>
    </div>
  );
}

export default App;
