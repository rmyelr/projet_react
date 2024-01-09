/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const gameContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
};

const moveSelectionStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginBottom: '10px',
};

const selectedMoveStyle = {
  marginTop: '20px',
};

const GamePage = () => {
  const [selectedMove, setSelectedMove] = useState('');

  const handleMoveSelection = (move) => {
    // Handle move selection logic
    setSelectedMove(move);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Game Page</h1>
      {/* Add your game UI components and styling here */}
      <div style={gameContainerStyle}>
        <div style={moveSelectionStyle}>
          <button onClick={() => handleMoveSelection('rock')} style={buttonStyle}>Rock</button>
          <button onClick={() => handleMoveSelection('paper')} style={buttonStyle}>Paper</button>
          <button onClick={() => handleMoveSelection('scissors')} style={buttonStyle}>Scissors</button>
        </div>
        <div style={selectedMoveStyle}>
          <p>Selected Move: {selectedMove}</p>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
