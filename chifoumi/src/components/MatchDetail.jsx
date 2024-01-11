import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MatchDetails = () => {
    const { id } = useParams();
    const [matchDetails, setMatchDetails] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        // Assurez-vous que le token existe avant de faire la requête
        if (token) {
            // Envoyer la requête GET pour récupérer les détails de la partie depuis le backend en utilisant l'ID dans les paramètres d'URL
            fetch(`http://fauques.freeboxos.fr:3000/matches/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setMatchDetails(data);
                    console.log(data);
                })
                .catch(error => console.error('Error fetching match details:', error));
        }
    }, [id]);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Match Details</h1>
            {/* Afficher les détails de la partie */}
            <div style={styles.detailsContainer}>
                {matchDetails.players &&
                    <p style={styles.text}>Players: {matchDetails.players.join(', ')}</p>
                }
                {matchDetails.rounds &&
                    matchDetails.rounds.map(round => (
                        <p key={round.id} style={styles.text}>
                            Round {round.id}: {round.player1Move} vs {round.player2Move}
                        </p>
                    ))
                }
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
    detailsContainer: {
        fontSize: '18px',
        marginTop: '20px',
    },
    text: {
        marginBottom: '10px',
    },
};

export default MatchDetails;
