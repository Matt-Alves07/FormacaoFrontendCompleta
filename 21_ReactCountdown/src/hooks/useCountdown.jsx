import { useState } from 'react';

const useCountdown = (date) => {
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const countdown = () => {
        const countDate = new Date(date).getTime();
        const today = new Date().getTime();

        const interval = countDate - today;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        /* const dayNumber = Math.floor(interval / day); */
        setDays(Math.floor(interval / day));
        /* const hourNumber = Math.floor((interval % day) / hour); */
        setHours(Math.floor((interval % day) / hour));
        /* const minuteNumber = Math.floor((interval % hour) / minute); */
        setMinutes(Math.floor((interval % hour) / minute));
        /* const secondNumber = Math.floor((interval % minute) / second); */
        setSeconds(Math.floor((interval % minute) / second));
    };

    setInterval(countdown, 1000);

    return [days, hours, minutes, seconds];
}

export default useCountdown;