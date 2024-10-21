import './Options.css';

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Options = ({ option, selectOption, answer, hide }) => {
    const [quizStage, dispatch] = useContext(QuizContext);

    return (
        <div
            className={
                `option
                    ${quizStage.answerSelected && option === answer ? 'correct' : ''}
                    ${quizStage.answerSelected && option !== answer ? 'wrong' : ''}
                    ${hide ? 'hide' : ''}
                `
            }
            onClick={() => selectOption(option)}
        >
            {option}
        </div>
    );
}

export default Options