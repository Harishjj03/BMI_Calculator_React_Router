import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      setBmi(null);
      setMessage('Please enter valid height and weight.');
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI is: {bmi}</h2>
          <p>Status: {message}</p>
        </div>
      )}
      <footer>
        Developed by HARISHBALA J | Reg No: 212224223002
      </footer>
    </div>
  );
}

export default App;