import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MatchDetails = () => {
    const { id } = useParams();
    const [matchDetails, setMatchDetails] = useState({});

    useEffect(() => {
        // Envoyer la requête GET pour récupérer les détails de la partie depuis le backend en utilisant l'ID dans les paramètres d'URL
        fetch(`/api/matches/${id}`)
            .then(res => res.json())
            .then(data => {
                setMatchDetails(data);
            });
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
        fontFamily: 'Milk Mongo, sans-serif', // Police personnalisée
        color: '#fff', // Couleur du texte en mode sombre
        backgroundColor: '#333', // Couleur d'arrière-plan en mode sombre
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    detailsContainer: {
        marginTop: '20px',
    },
    text: {
        fontSize: '16px',
        marginBottom: '10px',
    },
};

export default MatchDetails;
