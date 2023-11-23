import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
    const currentURL = window.location.href;
    
    return (
        <div>
            <h1 class='text-center mt-20'>Verificação de email concluída! Você pode voltar no aplicativo agora :)</h1>
            <h1 class='text-center mt-8'>URL: {currentURL}</h1>
        </div>
    );
}

export default App;
