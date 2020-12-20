import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Form, Col, Button } from 'react-bootstrap';

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
        <h1 className="mb-4">Find highest prime number</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control type="number" placeholder="Enter number" value={number}
              onChange={(e) => setNumber(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridResult">
              <Form.Label>Highest Prime</Form.Label>
              <Form.Control type="text" readOnly value={result}/>
            </Form.Group>
          </Form.Row>
          <Button size="lg" variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
