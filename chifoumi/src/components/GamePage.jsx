import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const GamePage = () => {
  const { matchId } = useParams();
  const [selectedMove, setSelectedMove] = useState(null);
  const [turnId, setTurnId] = useState(null);

  useEffect(() => {
    // Vous pouvez mettre en œuvre ici la logique pour obtenir le tour actuel en fonction de la taille du tableau de tours
    const turns = []; // Remplacez cela par la liste réelle des tours récupérée du backend
    const currentTurn = turns.length + 1; // Exemple simple : tour suivant
    setTurnId(currentTurn);
  }, [matchId]);

  const handleMove = (move) => {
    setSelectedMove(move);
    console.log(`Move selected: ${move}`);
  };

  const handlePlay = () => {
    if (selectedMove) {
      // Envoyer la requête POST au backend avec le mouvement sélectionné
      fetch(`http://fauques.freeboxos.fr:3000/matches/${matchId}/turns/${turnId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ move: selectedMove }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Move sent successfully:', data);
          // Traitez la réponse du backend ici
        })
        .catch((error) => {
          console.error('Error sending move:', error);
          // Gérez les erreurs ici
        });
    } else {
      console.warn('Veuillez choisir un mouvement avant de jouer.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Jouez à Chi Fu Mi</h1>
      <h3 style={styles.heading3}>Choisissez entre Pierre, Feuille, Ciseaux puis appuyez sur Jouer</h3>
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
        <button onClick={handlePlay} style={styles.buttonJouer}>
          Jouer
        </button>
    </div>

        <Link to="/Rules" style={styles.registerLink}>
          Règles du Jeu
        </Link>

        <Link to="/MatchList" style={styles.registerLinkml}>
          Liste des matches joués
        </Link>
    
    </div>
  );
};


const styles = {
  container: {
    fontFamily: 'Milk Mongo, sans-serif',
    color: '#2F1E0E',
    textAlign: 'center',
    position: 'relative',
  },
  heading1: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  heading3: {
    fontSize: '16px',
    marginBottom: '40px',
  },
  registerLink: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    color: '#2F1E0E',
    textDecoration: 'none',
    backgroundColor: '#b3a089',
    padding: '10px 20px',
    fontSize: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '25px',
    margin: '0 100px',
  },

  registerLinkml: {
    position: 'fixed',
    bottom: '20px',
    right: '140px',
    color: '#2F1E0E',
    textDecoration: 'none',
    backgroundColor: '#b3a089',
    padding: '10px 20px',
    fontSize: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '25px',
    margin: '0 100px',
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
  buttonJouer: {
    backgroundColor: '#e69cac',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    margin: '0px 20px',
  },
};


export default GamePage;
