/* eslint-disable no-unused-vars */
import { useState } from 'react';

const GamePage = () => {

  const handleMove = (move) => {
    // Ajoutez ici la logique pour gérer le mouvement
    console.log(`Move selected: ${move}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Jouez à Chi Fu Mi</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleMove('rock')} style={styles.button}>
          Pierre
        </button>
        <button onClick={() => handleMove('paper')} style={styles.button}>
          Feuille
        </button>
        <button onClick={() => handleMove('scissors')} style={styles.button}>
          Ciseaux
        </button>
      </div>
    </div>
  );
};


const styles = {
    container: {
        fontFamily: 'Milk Mongo, sans-serif',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
    },
    heading: {
        fontSize: '36px',
        marginBottom: '20px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
    },
    button: {
        backgroundColor: '#61dafb',
        color: '#fff',
        padding: '15px 30px',
        fontSize: '18px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        margin: '0 10px',
    },
};

export default GamePage;
