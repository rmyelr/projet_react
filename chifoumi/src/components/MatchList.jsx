import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Vérifier si le token est présent
        if (!token) {
            console.error('Token not found. User not authenticated.');
            // Vous pouvez rediriger l'utilisateur vers la page de connexion ici
            return;
        }

        // Send GET request to retrieve list of matches from backend
        fetch('http://fauques.freeboxos.fr:3000/matches', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                // Vérifier si la requête a réussi
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('Data from server:', data);
                setMatches(data);
            })
            .catch(error => {
                console.error('Error fetching matches:', error);
            });
    }, [token]);

    const handleCreateMatch = async () => {
        try {
            const res = await fetch('http://fauques.freeboxos.fr:3000/matches', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            // Vérifier si la requête a réussi
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const responseData = await res.json();

            // Handle the successful response
            console.log('New match created:', responseData);
            // Vous pouvez mettre à jour l'état avec le nouveau match ou rafraîchir la liste des matches
            // setMatches([...matches, responseData]);
        } catch (error) {
            console.error('Error creating match:', error);
        }
    };

    return (
        <div>
            <h1>Liste des matchs</h1>
            <ul>
                {matches.map(match => (
                    <li key={match._id}>
                        <Link to={`/match/${match._id}`}>
                            <p>ID du Match: {match._id}</p>
                            <p>User 1: {match.user1.username}</p>
                            <p>User 2: {match.user2 ? match.user2.username : 'En attente'}</p>
                            <p>Nombre de tours: {match.turns.length}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Ajouter un bouton pour créer un nouveau match */}
            <button onClick={handleCreateMatch}>Nouveau Match</button>
        </div>
    );
};

export default MatchList;
