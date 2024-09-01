
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/form');
        setMessage(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
}

export default FormComponent;
