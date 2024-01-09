import 'react';


const Rules = () => {
    return (
        <div>
            <h1>Règles du Pierre Feuille Ciseaux</h1>
            <p>Les joueurs dévoilent simultanément leur main.</p>
            <p>La forme la plus forte lemporte.</p>
            <p>Si les deux joueurs utilisent la même forme, c est un match nul.</p>
            
            <h2>Règles des formes:</h2>
            <p><strong>Pierre:</strong> La pierre bat les ciseaux.</p>
            <p><strong>Feuille:</strong> La feuille bat la pierre.</p>
            <p><strong>Ciseaux:</strong> Les ciseaux battent la feuille.</p>

            <h2>Exemple:</h2>
            <p>Pierre contre ciseaux: La pierre écrase les ciseaux, donc la pierre gagne.</p>
            <p>Feuille contre pierre: La feuille enveloppe la pierre, donc la feuille gagne.</p>
            <p>Ciseaux contre feuille: Les ciseaux coupent la feuille, donc les ciseaux gagnent.</p>

            <h2>Règles supplémentaires:</h2>
            <ul>
                <li>Le match peut se jouer à deux ou plus.</li>
                <li>Le joueur qui gagne le plus de manches remporte la partie.</li>
            </ul>

            <h2>Formules à utiliser:</h2>
            <p><strong>Pour commencer:</strong></p>
            <ul>
                <li>Comptez jusqu à trois en mettant la main dans le dos.</li>
                <li>Une fois à trois, dévoilez votre main en même temps.</li>
            </ul>

            <p><strong>Pour jouer:</strong></p>
            <ul>
                <li>Choisissez une forme (pierre, feuille ou ciseaux).</li>
                <li>Dévoilez votre forme en même temps que votre adversaire.</li>
            </ul>

            <p><strong>Pour déterminer le vainqueur:</strong></p>
            <ul>
                <li>Comparez vos formes.</li>
                <li>La forme la plus forte l emporte.</li>
            </ul>

            <p><strong>Pour le match nul:</strong></p>
            <ul>
                <li>Si les deux joueurs utilisent la même forme, c est un match nul.</li>
            </ul>
        </div>
    );
};

export default Rules;
