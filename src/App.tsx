import React from 'react';
import './App.css';
import Champions from "./resources/Champions.jsx";

function App() {
  return (
    <div>
      <div className='head'>
        <div className="title">
          <h1>LoL Champs</h1>     
        </div>
        <div>
          <img src='favicon.png' className='icone' alt='Ícone'></img>
        </div>
      </div> 
      <div >
        <Champions />
      </div>
    </div>
  );
}

export default App;