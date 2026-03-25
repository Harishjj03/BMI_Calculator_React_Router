# Ex06 BMI Calculator
## Date: 25-03-2026

## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM
APP.JSX
```
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

```
APP.CSS
```
body {
  font-family: Arial, sans-serif;
  background-color: #eef1f4;
  margin: 0;
  padding: 0;
}
h1{
  color: rgb(241, 38, 11);
}

.container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  background: rgb(236, 232, 232);
  border-radius: 8px;
  box-shadow: 0px 0px 10px blueviolet;
  text-align: center;
}

.input-group {
  margin: 20px 0;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="number"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0d47a1;
}

.result {
  margin-top: 20px;
}

footer {
  margin-top: 30px;
  font-size: 14px;
  color: #555;
}

```


## OUTPUT
![alt text](<Screenshot 2026-03-25 114236.png>)


## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
