"use client";
import React, { useState } from 'react';
import customAxiosInstance from './customAxiosInstance';


const ServerResponseStatus = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const checkServerStatus = async () => {
    try {
      const response = await customAxiosInstance.post('https://www.psslai.com/'); 
      setStatus(response.data.status);
    } catch (err:any) { 
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={checkServerStatus}>Check Server Status</button>
      {status && <div>Server Response Status: {status}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ServerResponseStatus;
