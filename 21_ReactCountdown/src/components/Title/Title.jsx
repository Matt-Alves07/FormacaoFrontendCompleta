import './Title.css';

const Title = ({ title, eventColor }) => {
    return (
        <h1 id='title' style={{ color: eventColor }}>{title}</h1>
    );
}

export default Title