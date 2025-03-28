import React, { useState, useEffect } from 'react';
import './index.css';

function Time() {
  const [clock, setClock] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Time</h1>
      </header>
      <div className="counter-display">
        <h2>{clock}</h2>
      </div>
    </div>
  );
}

function getFormattedTime() {
  let time = new Date();
  return `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}:${String(time.getSeconds()).padStart(2, '0')}`;
}

export default Time;