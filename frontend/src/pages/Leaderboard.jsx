import React, { useEffect, useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard') // ✅ matches backend route
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ul className="leaderboard-list">
        {data.map((entry, index) => (
          <li key={index}>
            #{index + 1} {entry.name} - ₹{entry.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
