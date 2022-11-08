import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import { ReactDOM } from 'react-dom';

import './style.css';

export default function ReadAll() {

    const [email, setEmail] = useState('');

    async function handleReadAll(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const update = await ClientUsers.readAllUsers(data);

        const aux = update.data

        const listItems = aux.map((usu) => 
            <p>{usu}</p>
        )

        console.log('update', update);
        if (update.status === 200) {
            toast.success('Usuários listados!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar todos os usuários">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleReadAll}>

                        <button type="submit">Listar</button>
                        
                    </form>

                </div>

            </div>
        </div>
    )
}