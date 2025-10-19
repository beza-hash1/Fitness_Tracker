import React, { useState, useEffect } from 'react';
import './style.css';
import stepsIcon from './assets/steps.png';
import waterIcon from './assets/water.png';
import nutritionIcon from './assets/nutrition.png';
import avatarIcon from './assets/avatar.png';

function App() {
  const [steps, setSteps] = useState(localStorage.getItem('steps') || '');
  const [water, setWater] = useState(localStorage.getItem('water') || '');
  const [nutrition, setNutrition] = useState(localStorage.getItem('nutrition') || '');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    localStorage.setItem('steps', steps);
    localStorage.setItem('water', water);
    localStorage.setItem('nutrition', nutrition);
    updateSummary();
  }, [steps, water, nutrition]);

  const updateSummary = () => {
    let summaryText = '';
    if (steps >= 5000 && water >= 2 && nutrition.toLowerCase().includes('fruit')) {
      summaryText = "💪 You're doing amazing! Keep it up!";
    } else {
      summaryText = "⚠️ Try to walk more, drink enough water, and eat healthy!";
    }
    setSummary(summaryText);
  };

  return (
    <div className="container">
      <h1>🏋️‍♀️ Fitness Tracker</h1>

      <div className="tracker">
        <label>Steps:</label>
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Enter steps"
        />
      </div>

      <div className="tracker">
        <label>Water (L):</label>
        <input
          type="number"
          value={water}
          onChange={(e) => setWater(e.target.value)}
          placeholder="Enter water intake"
        />
      </div>

      <div className="tracker">
        <label>Nutrition:</label>
        <input
          type="text"
          value={nutrition}
          onChange={(e) => setNutrition(e.target.value)}
          placeholder="e.g. salad, rice, fruits"
        />
      </div>

      <h2>Summary</h2>
      <p className="summary">{summary}</p>
    </div>
  );
}

export default App;
