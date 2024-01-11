import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Votre logique de connexion ici
        navigate('/MatchList');
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
                        <span>Username</span>
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
                        <span>Password</span>
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
                <br />Dévellopper par Merryl Zoure et Lorin Kakahoun
            </div>
            <div>
                <button onClick={() => changeLanguage('fr')}>Français</button>
                <button onClick={() => changeLanguage('en')}>English</button>
                {/* Ajoutez les autres langues selon vos besoins */}
            </div>
            <div style={styles.backgroundImages}>
                
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
        width: '100%',
        boxSizing: 'border-box',
    },
    ephemeralText: {
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        color: '#999',
        fontSize: '12px',
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
        fontSize: '16px',
        color: '#fff',
        textDecoration: 'none',
        marginTop: '15px',
        display: 'block',
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
