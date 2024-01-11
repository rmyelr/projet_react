import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Votre logique de connexion ici
        navigate('/GamePage');
    };

    const changeLanguage = (lang) => {
        // Ajoutez ici la logique pour changer la langue
        console.log(`Changer la langue vers ${lang}`);
    };

    return (
        <div style={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                style={styles.loginBox}
            >
                <h1 style={styles.heading}>Jouez à Chi Fu Mi</h1>
                <form style={styles.form}>
                    <label style={styles.label}>
                        Nom d utilisateur:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                            placeholder="username"
                        />
                    </label>
                    <label style={styles.label}>
                        Mot de passe:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            placeholder="password"
                        />
                    </label>
                    <button type="button" onClick={handleLogin} style={styles.button}>
                        Se connecter
                    </button>
                    <Link to="/Register" style={styles.registerLink}>
                        Inscrivez-vous
                    </Link>
                </form>
            </motion.div>
            <div style={styles.footer}>
                Des questions ? Appelez le (+33) 0769944462
            </div>
            <div style={styles.languageButton}>
                <button onClick={() => changeLanguage('fr')}>Français</button>
                <button onClick={() => changeLanguage('en')}>English</button>
                {/* Ajoutez les autres langues selon vos besoins */}
            </div>
            <div style={styles.backgroundImages}>
                {/* Ajoutez le code pour les vignettes d'arrière-plan ici */}
                {/* Assurez-vous d'ajuster les styles CSS pour les vignettes d'arrière-plan */}
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Milk Mongo, sans-serif',
        color: '#151947',
        textAlign: 'center',
        position: 'relative',
    },
    loginBox: {
        initial: {
            opacity: 0,
            y: -100,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: -100,
        },
    },
    backgroundImages: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    heading: {
        fontSize: '36px',
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '10px',
        position: 'relative',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '30%',
        boxSizing: 'border-box',
    },
    
    button: {
        backgroundColor: '#61dafb',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        marginTop: '15px',
        marginRight: '10px',
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
    footer: {
        marginTop: '50px',
    },
    languageButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1,
    },
};

export default Login;
