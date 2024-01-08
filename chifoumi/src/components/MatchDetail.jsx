import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MatchDetails = () => {
    const { id } = useParams();
    const [matchDetails, setMatchDetails] = useState({});

    useEffect(() => {
        // Envoyer la requête GET pour récupérer les détails de la partie depuis le backend en utilisant l'ID dans les paramètres d'URL
        fetch(`http://fauques.freeboxos.fr:3000/matches/${id}`)
            .then(res => res.json())
            .then(data => {
                setMatchDetails(data);
            });
    }, [id]);

    return (
        <div>
            <h1>Match Details</h1>
            {/* Afficher les détails de la partie */}
            <div>
                <p>Date: {matchDetails.date}</p>
                <p>Heure: {matchDetails.time}</p>
                <p>Nom du gagnant: {matchDetails.winner ? matchDetails.winner.username : 'En cours'}</p>
                <p>Nombre de manches: {matchDetails.rounds ? matchDetails.rounds.length : 0}</p>
                {/* Ajoutez d'autres détails selon vos besoins */}
            </div>

            {/* Afficher les détails des rounds */}
            <div>
                {matchDetails.rounds &&
                    matchDetails.rounds.map(round => (
                        <p key={round.id}>
                            Round {round.id}: {round.player1Move} vs {round.player2Move}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default MatchDetails;
