import 'react';

const Rules = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Règles du Pierre Feuille Ciseaux</h1>
            <div style={styles.rulesContainer}>
                <p style={styles.text}>Les joueurs dévoilent simultanément leur main.</p>
                <p style={styles.text}>La forme la plus forte lemporte.</p>
                <p style={styles.text}>Si les deux joueurs utilisent la même forme, cest un match nul.</p>

                <h2 style={styles.subHeading}>Règles des formes:</h2>

                <p style={styles.text}>Pierre:</p>
                <p style={styles.text}>La pierre bat les ciseaux.</p>

                <p style={styles.text}>Feuille:</p>
                <p style={styles.text}>La feuille bat la pierre.</p>

                <p style={styles.text}>Ciseaux:</p>
                <p style={styles.text}>Les ciseaux battent la feuille.</p>

                <h2 style={styles.subHeading}>Exemple:</h2>

                <p style={styles.text}>Pierre contre ciseaux: La pierre écrase les ciseaux, donc la pierre gagne.</p>
                <p style={styles.text}>Feuille contre pierre: La feuille enveloppe la pierre, donc la feuille gagne.</p>
                <p style={styles.text}>Ciseaux contre feuille: Les ciseaux coupent la feuille, donc les ciseaux gagnent.</p>

                <h2 style={styles.subHeading}>Règles supplémentaires:</h2>

                <p style={styles.text}>Le match peut se jouer à deux ou plus.</p>
                <p style={styles.text}>Le joueur qui gagne le plus de manches remporte la partie.</p>

                <h2 style={styles.subHeading}>Formules à utiliser:</h2>

                <h3 style={styles.subHeading}>Pour commencer:</h3>
                <p style={styles.text}>Comptez jusquà trois en mettant la main dans le dos.</p>
                <p style={styles.text}>Une fois à trois, dévoilez votre main en même temps.</p>

                <h3 style={styles.subHeading}>Pour jouer:</h3>
                <p style={styles.text}>Choisissez une forme (pierre, feuille ou ciseaux).</p>
                <p style={styles.text}>Dévoilez votre forme en même temps que votre adversaire.</p>

                <h3 style={styles.subHeading}>Pour déterminer le vainqueur:</h3>
                <p style={styles.text}>Comparez vos formes.</p>
                <p style={styles.text}>La forme la plus forte lemporte.</p>

                <h3 style={styles.subHeading}>Pour le match nul:</h3>
                <p style={styles.text}>Si les deux joueurs utilisent la même forme, cest un match nul.</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Milk Mongo, sans-serif',
        color: '#fff',
        backgroundColor: '#333',
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    rulesContainer: {
        marginTop: '20px',
    },
    subHeading: {
        fontSize: '20px',
        marginTop: '15px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
        marginBottom: '10px',
    },
};

export default Rules;
