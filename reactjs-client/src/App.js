import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:9000/`;

    axios.post(apiUrl, {
      "number": Number(number)
    }).then((res) => {
      setResult(res.data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find highest prime number</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
          Result: {result}
        </label>
        <input type="submit" value="Submit" />
      </form>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
