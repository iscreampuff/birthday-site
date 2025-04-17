import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [traits, setTraits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 360, // Default to 360px if window is undefined
    height: typeof window !== 'undefined' ? window.innerHeight : 740, // Common Samsung phone height
  });

  // Confetti configuration optimized for mobile
  const confettiConfig = {
    width: windowSize.width,
    height: windowSize.height,
    recycle: true, // Keep confetti flowing
    numberOfPieces: 200, // Reduced for mobile performance
    gravity: 0.1, // Slower fall
    wind: 0.01, // Gentle movement
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'], // Bright birthday colors
    opacity: 0.7, // Slightly transparent
  };

  // Handle window resize
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch traits
  useEffect(() => {
    axios.get('/api/traits')
      .then(response => {
        setTraits(response.data.traits);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching traits:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      {/* Confetti optimized for Samsung phones */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        gravity={0.3}
        initialVelocityY={15}
        recycle={true}
        numberOfPieces={150}
        style={{ position: 'fixed' }}
      />

      <header className="header">
        <h1 id="custom">HAPPY BIRTHDAY! 🎉</h1>
        <h2>这些是我心中你最美好的100个优点，谢谢你一直以来的陪伴和温暖！</h2>
      </header>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="traits-container">
          {traits.map((trait, index) => (
            <div key={index} className="trait-card">
              {trait}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
