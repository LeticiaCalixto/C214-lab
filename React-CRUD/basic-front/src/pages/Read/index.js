import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Read() {

    const [email, setEmail] = useState('');

    async function handleRead(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const update = await ClientUsers.readUser(data);
        console.log('update', update);
        if (update.status === 200) {
            toast.success('Usuário encontrado!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRead}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Listar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}