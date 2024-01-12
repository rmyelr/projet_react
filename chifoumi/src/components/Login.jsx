import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language is English
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Your login logic here
        navigate('/MatchList');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
    };

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Français' },
        { value: 'de', label: 'Deutsch' },
        { value: 'ja', label: '日本語' },
        { value: 'es', label: 'Español' },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.languageDropdown}>
                <label htmlFor="languageSelect">Select the Language: </label>
                <select
                    id="languageSelect"
                    value={currentLanguage}
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    {languageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                style={styles.loginBox}
            >
                <h1 style={styles.heading}>
                    {currentLanguage === 'en'
                        ? 'Play Rock Paper Scissors'
                        : currentLanguage === 'fr'
                        ? 'Jouez à Pierre-Papier-Ciseaux'
                        : currentLanguage === 'de'
                        ? 'Spielen Sie Schere, Stein, Papier'
                        : currentLanguage === 'ja'
                        ? 'じゃんけんをプレイ'
                        : 'Juega Piedra, Papel o Tijeras'}
                </h1>
                <form style={styles.form}>
                    <label style={styles.label}>
                        {currentLanguage === 'en' ? 'Username:' : currentLanguage === 'fr' ? 'Nom d\'utilisateur:' : currentLanguage === 'de' ? 'Benutzername:' : currentLanguage === 'ja' ? 'ユーザー名:' : 'Nombre de usuario:'}
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder={currentLanguage === 'en' ? 'Enter your username' : currentLanguage === 'fr' ? 'Entrez votre nom d\'utilisateur' : currentLanguage === 'de' ? 'Geben Sie Ihren Benutzernamen ein' : currentLanguage === 'ja' ? 'ユーザー名を入力してください' : 'Ingrese su nombre de usuario'}
                            style={styles.input}
                        />
                    </label>
                    <br />
                    <label style={styles.label}>
                        {currentLanguage === 'en' ? 'Password:' : currentLanguage === 'fr' ? 'Mot de passe:' : currentLanguage === 'de' ? 'Passwort:' : currentLanguage === 'ja' ? 'パスワード:' : 'Contraseña:'}
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={currentLanguage === 'en' ? 'Enter your password' : currentLanguage === 'fr' ? 'Entrez votre mot de passe' : currentLanguage === 'de' ? 'Geben Sie Ihr Passwort ein' : currentLanguage === 'ja' ? 'パスワードを入力してください' : 'Ingrese su contraseña'}
                            style={styles.input}
                        />
                        <span style={styles.showPasswordToggle} onClick={togglePasswordVisibility}>
                            {showPassword ? 'Hide' : 'Show'}
                        </span>
                    </label>
                    <br />
                    <button type="button" onClick={handleLogin} style={styles.button}>
                        {currentLanguage === 'en' ? 'Login' : currentLanguage === 'fr' ? 'Se connecter' : currentLanguage === 'de' ? 'Anmelden' : currentLanguage === 'ja' ? 'ログイン' : 'Iniciar sesión'}
                    </button>
                    <Link to="/Register" style={styles.registerLink}>
                        {currentLanguage === 'en' ? 'Register' : currentLanguage === 'fr' ? 'Inscrivez-vous' : currentLanguage === 'de' ? 'Registrieren' : currentLanguage === 'ja' ? '登録' : 'Registro'}
                    </Link>
                </form>
            </motion.div>
            <div style={styles.footer}>
                <div style={styles.footerSection}>
                    <h3>Mentions Légales</h3>
                    <p>
                        Développé par Merryl Zoure et Lorin Fawaz Melo
                        <br />
                        Entreprise ESILV Jeu en ligne, basée à Paris La Défense
                    </p>
                </div>
                <div style={styles.footerSection}>
                    <h3>Conditions Générales de Vente</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris non dignissim massa. Sed vel aliquet nunc.
                    </p>
                </div>
                <div style={styles.footerSection}>
                    <h3>Contact</h3>
                    <p>
                        Lorin Fawaz Melo: (+33) 0769944462 | fawazkakahoun@gmail.com
                        <br />
                        Merryl Zoure: (+33) 0726444996 | merrylzoure@gmail.com
                    </p>
                </div>
                <div style={styles.footerSection}>
                    <p>
                        Développé en Janvier 2024 par Merryl Zoure et Lorin Fawaz Melo
                        <br />
                        Remerciements
                    </p>
                </div>
            </div>
            <div style={styles.backgroundImages}>
                {/* Add code for background thumbnails here */}
                {/* Make sure to adjust the CSS styles for background thumbnails */}
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
    languageDropdown: {
        position: 'absolute',
        top: '10px',
        right: '5px',
        zIndex: 1,
        color: '#2F1E0E',
        textDecoration: 'none',
        backgroundColor: '#e0e0e0',
        padding: '5px 10px',
        fontSize: '8px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '25px',
        margin: '0 10px',
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: {
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
        textDecoration: 'none',
        color: '#007bff',
        fontSize: '14px',
        marginTop: '10px',
        display: 'block',
    },
    footer: {
        fontSize: '7px',
        background: '#7A7A7A',
        color: '#a6a6a6',
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '50px',
    },
    footerSection: {
        flex: '1',
        margin: '10px',
    },
    showPasswordToggle: {
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#007bff',
    },
};

export default Login;
