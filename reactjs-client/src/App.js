import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Form, Col, Button } from 'react-bootstrap';

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    setValidated(true);

    const apiUrl = `http://localhost:9000/`;

    axios.post(apiUrl, {
      "number": Number(number)
    }).then(res => {
      setResult(res.data);
    }).catch(err => {
      // handle error
      console.log('err', err);
    });
  }

  const handleNumberChange = (e) => {
    if(parseInt(e.target.value)){
      setValidated(true);
    } else {
      setValidated(false);
    }
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mb-4">Find highest prime number</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control type="number" inputMode="numeric" placeholder="Enter number" value={number}
              onChange={handleNumberChange} required/>
              <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridResult">
              <Form.Label>Highest Prime</Form.Label>
              <Form.Control type="text" readOnly value={result}/>
            </Form.Group>
          </Form.Row>
          <Button size="lg" variant="primary" type="submit" block disabled={!validated}>
            Submit
          </Button>
        </Form>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
