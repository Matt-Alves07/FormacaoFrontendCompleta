import './GameOver.css';
import Welldone from '../../imgs/welldone.svg';

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const GameOver = () => {
  const [quizStage, dispatch] = useContext(QuizContext);

  return (
    <div id='gameover'>
        <h2>Fim de jogo</h2>

        <p>Pontuação: {quizStage.score}</p>

        <p>Você acertou {quizStage.score} de {quizStage.questions.length} perguntas.</p>

        <img src={Welldone} alt="Game over" />

        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default GameOver