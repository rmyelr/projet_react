import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch('http://fauques.freeboxos.fr:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const resData = await res.text();

        const data = JSON.parse(resData);
        // Stockez le token dans le localStorage ou les cookies pour les sessions
        localStorage.setItem('token', data.token);
        // Redirigez l'utilisateur vers la page suivante après la connexion réussie
        navigate('/MatchList');
    };

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: 'auto',
                padding: '20px',
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                </label>
                <br />
                <button
                    type="button"
                    onClick={handleLogin}
                    style={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '12px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
