// src/components/FormComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';


function FormComponent() {
  const [name, setName] = useState('');
  const [problem, setProblem] = useState('');
  const [response, setResponse] = useState(null);
  const [data, setData] = useState([]);
  const BASE_URL = `${config.API_BASE_URL}/api`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(`${BASE_URL}/submit`, { name, problem });
      setResponse(result.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const fetchData = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/data`);
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Welcome to the Problem Solver</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Biggest Problem:
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div className="response">
          <h2>Received Data:</h2>
          <p><strong>Name:</strong> {response.name}</p>
          <p><strong>Problem:</strong> {response.problem}</p>
          <p><strong>Your DB Index Is:</strong> {response.id}</p>
        </div>
        
      )}
      <button onClick={fetchData}>Fetch All Data</button>
      {data.length > 0 && (
        <div className="response">
          <h2>All Data:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Problem</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.problem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
