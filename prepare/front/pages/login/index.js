import React from 'react';
import LoginForm from '../../components/LoginComponent/LoginForm';
const Login = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgb(51, 51, 51)',
            }}
        >
            <LoginForm />
        </div>
    );
};

export default Login;
