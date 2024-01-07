import { useEffect, useState } from 'react';
const token = localStorage.getItem('token');


const MatchList = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        // Send GET request to retrieve list of matches from backend
        fetch('http://fauques.freeboxos.fr:3000/matches', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('Data from server:', data);
                setMatches(data);
            });
    }, []);

    return (
        <div>
          <h1>Liste des matchs</h1>
          <ul>
            {matches.map(match => (
              <li key={match._id}>
                <p>ID du Match: {match._id}</p>
                <p>User 1: {match.user1.username}</p>
                <p>User 2: {match.user2 ? match.user2.username : 'En attente'}</p>
                <p>Nombre de tours: {match.turns.length}</p>
                {/* Ajoutez d'autres détails du match selon vos besoins */}
              </li>
            ))}
          </ul>
          {/* Ajouter un lien pour créer un nouveau match */}
        </div>
      );
            }      



export default MatchList;
