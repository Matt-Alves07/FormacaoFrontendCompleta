import './Countdown.css';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Title from "../../components/Title/Title";
import Counter from "../../components/Counter/Counter";

import useCountdown from '../../hooks/useCountdown';
import { CountdownContext } from '../../context/CountdownContext';

const Countdown = () => {
    const { event } = useContext(CountdownContext);
    if (!event)
        return <Navigate to="/" />;

    const eventTitle = event.title;
    const eventDate = event.date;
    const eventColor = event.color;

    const [day, hour, minute, second] = useCountdown(eventDate);

    return (
        <>
            <Title title={eventTitle} eventColor={eventColor}/>

            <div className="countdown-container">
            <Counter title="Dias" number={day} eventColor={eventColor}/>
            <Counter title="Horas" number={hour} eventColor={eventColor}/>
            <Counter title="Minutos" number={minute} eventColor={eventColor}/>
            <Counter title="Segundos" number={second} eventColor={eventColor}/>
            </div>
        </>
    );
}

export default Countdown