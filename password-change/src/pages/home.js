import React from 'react';

import { useMutation, gql } from '@apollo/client';

const CHANGE_PASSWORD = gql`
    mutation Mutation($newPassword: String!) {
        changePassword(newPassword: $newPassword)
    }
`;

const Home = () => {
    const [changePassword, { data, loading, error }] = useMutation(CHANGE_PASSWORD)

    if (error) return <p>Erro ao trocar senha</p>
    if (loading) return <p>Carregando...</p>
    if (data) {console.log(data)}

    function checkPasswordIsEqual(pass1, pass2){
        const passwordValue1 = document.getElementById('pass1').value
        const passwordValue2 = document.getElementById('pass2').value

        if (passwordValue1 === passwordValue2){
            updatePassword(passwordValue1)
            return true
        }

        return false
    }

    function updatePassword(newPassword ){
        changePassword({
            variables: {
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

            <button class='w-20 h-10 rounded-lg border border-gray-300' onClick={()=>checkPasswordIsEqual('pass1', 'pass2')}>Enviar</button>
        </div>
    )
};

export default Home;
