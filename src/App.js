import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://13.58.158.13:8080/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>
		  <h1>Welcome to SansTrick</h1>
		  <p>Great things are not happened in a moment. We are on a journey. Wait and see...</p>
		</div>
    <div
      style={{
        backgroundColor: 'lightgray',
        color: 'navy',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h2>{message}</h2>
    </div>
        
      </header>
    </div>
  );
}

export default App;
