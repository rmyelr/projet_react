import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const matchItemStyle = {
  listStyle: 'none',
  marginBottom: '20px',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '8px',
};

const matchLinkStyle = {
  textDecoration: 'none',
  color: '#333',
};

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch matches from the backend
    fetch('http://fauques.freeboxos.fr:3000/matches', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setMatches(data);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Liste des matchs</h1>
      <ul>
        {matches.map(match => (
          <li key={match._id} style={matchItemStyle}>
            <Link to={`/match/${match._id}`} style={matchLinkStyle}>
              <p>ID du Match: {match._id}</p>
              <p>User 1: {match.user1.username}</p>
              <p>User 2: {match.user2 ? match.user2.username : 'En attente'}</p>
              <p>Nombre de tours: {match.turns.length}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
