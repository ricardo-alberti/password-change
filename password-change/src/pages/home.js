import React from 'react';

import { useMutation, gql } from '@apollo/client';

const CHANGE_PASSWORD = gql`
    mutation Mutation($token: String!, $newPassword: String!) {
        changePassword(token: $token, newPassword: $newPassword)
    }
`;

const Home = () => {
    const currentURL = window.location.href;
    const token = currentURL.split('/').pop().toString()

    const [changePassword, { data, loading, error }] = useMutation(CHANGE_PASSWORD)

    if (error) return console.log(error)
    if (loading) return <p>Carregando...</p>
    if (data) return <p>Senha trocada com sucesso</p>

    function checkPasswordIsEqual(){
        const passwordValue1 = document.getElementById('pass1').value
        const passwordValue2 = document.getElementById('pass2').value

        if (passwordValue1 === passwordValue2){
            updatePassword(passwordValue1)
        }

        return <p>Senhas não iguais</p>
    }

    function updatePassword(newPassword){
        changePassword({
            variables: {
                token: token,
                newPassword: newPassword
            }
        })
    }

    return (
        <div class='flex-col text-center items-center w-80'>
            <h1 class='p-10 text-lg'>Alteração de senha</h1>

            <div class='flex-col m-5'>
                <label class='m-5'>Nova senha</label>
                <input id='pass1' type="text" class="p-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-black-500 focus:border-blue-500" required />
            </div>

            <div class='flex-col m-5'>
                <label class='m-5'>Confirmar nova senha</label>
                <input id='pass2' type="text" class="p-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-black-500 focus:border-blue-500" required />
            </div>

            <button class='w-20 h-10 rounded-lg border border-gray-300' onClick={checkPasswordIsEqual}>Enviar</button>
        </div>
    )
};

export default Home;
