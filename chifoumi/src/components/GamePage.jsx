/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GamePage = () => {
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [matchDetails, setMatchDetails] = useState({});
    const [playerMove, setPlayerMove] = useState('');
    const [isTurnCompleted, setIsTurnCompleted] = useState(false);

    useEffect(() => {
        // Fetch match details when the component mounts
        fetch(`http://fauques.freeboxos.fr:3000/matches/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setMatchDetails(data);
        });
    }, [id, token]);

    const handleMove = async (move) => {
        // Assuming matchDetails contains information about the current turn, such as turnId
        const turnId = matchDetails.turns.length + 1; // You should fetch this information from the backend

        try {
            const res = await fetch(`http://fauques.freeboxos.fr:3000/matches/${id}/turns/${turnId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ move }),
            });

            const responseData = await res.json();

            // Handle different response scenarios
            if (res.status === 202) {
                // Move was successfully accepted
                setIsTurnCompleted(true);
            } else if (res.status === 400) {
                // Handle specific error scenarios
                if (responseData.turn === 'not found') {
                    console.error('Invalid turn ID');
                } else if (responseData.turn === 'not last') {
                    console.error('Turn is not the last one');
                } else if (responseData.match === 'Match already finished') {
                    console.error('Match is already finished');
                } else if (responseData.user === 'move already given') {
                    console.error('Player has already given a move for this turn');
                }
            }
        } catch (error) {
            console.error('Error submitting move:', error);
        }
    };

    // ... (remaining code)

    return (
        <div>
            {/* ... (previous code) */}

            {/* Display player move options */}
            <div>
                <h2>Your Move:</h2>
                <button onClick={() => handleMove('rock')}>Rock</button>
                <button onClick={() => handleMove('paper')}>Paper</button>
                <button onClick={() => handleMove('scissors')}>Scissors</button>
            </div>

            {/* ... (remaining code) */}
        </div>
    );
};

export default GamePage;
