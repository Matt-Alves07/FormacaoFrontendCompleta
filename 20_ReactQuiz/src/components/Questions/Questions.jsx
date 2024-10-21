import './Questions.css';

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Options from '../Options/Options';

const Questions = () => {
  const [quizStage, dispatch] = useContext(QuizContext);
  const currentQuestion = quizStage.questions[quizStage.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option},
    });
  };

  return (
    <div id='question'>
      <p>Pergunta {quizStage.currentQuestion + 1} de {quizStage.questions.length}</p>

      <h2>{currentQuestion.question}</h2>

      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Options
            key={option}
            option={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizStage.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>

      {!quizStage.answerSelected && !quizStage.help && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({ type : "SHOW_TIP" })}>dica</button>
          )}

          <button onClick={() => dispatch({ type: "REMOVE_ONE" })}>Excluir uma</button>
        </>
      )}

      {!quizStage.answerSelected && quizStage.help === 'tip' && <p>{currentQuestion.tip}</p>}

      {quizStage.answerSelected && (<button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>continuar</button>)}
    </div>
  )
}

export default Questions