import React, { useState } from 'react';
import axios from 'axios';

const Test1 = () => {
  const sendDataToFlask = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/receive_data',
        {
          message: 'hello',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data to Flask:', error);
    }
  };

  return (
    <div>
      <button onClick={sendDataToFlask}>Send Data to Flask</button>
    </div>
  );
};

export default Test1;
