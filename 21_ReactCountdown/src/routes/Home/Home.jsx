import './Home.css';

import { CountdownContext } from '../../context/CountdownContext';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [color, setColor] = useState('#000');

    const navigate = useNavigate();
    const { setEvent } = useContext(CountdownContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const eventObject = { title, date, color };

        setEvent(eventObject);
        navigate("/countdown");
    };

    return (
        <div className="home">
            <h2>Crie sua contagem regressiva</h2>

            <form className="countdown-form" onSubmit={(e) => handleSubmit(e)}>
                <label>
                    <span>Título:</span>
                    <input type="text" name="title" placeholder="Digite o título do evento..." onChange={(e) => setTitle(e.target.value)} required/>
                </label>

                <label>
                    <span>Data do evento:</span>
                    <input type="date" name="data" onChange={(e) => setDate(e.target.value)} required/>
                </label>

                <label>
                    <span>Cor do tema:</span>
                    <input type="color" name="color" onChange={(e) => setColor(e.target.value)}/>
                </label>

                <input type="submit" value="enviar"/>
            </form>
        </div>
    );
}

export default Home