import './Welcome.css';
import Quiz from '../../imgs/quiz.svg';

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Welcome = () => {
    const [quizStage, dispatch] = useContext(QuizContext);

    return (
        <div id='welcome'>
            <h2>Seja bem vindo ao Web dev quiz!</h2>

            <p>Clique no botão abaixo para começarmos:</p>

            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
                Iniciar
            </button>

            <img src={Quiz} alt="Quiz image" />
        </div>
    );
}

export default Welcome;