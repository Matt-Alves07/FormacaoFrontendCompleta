import './App.css';

import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/Welcome';
import Questions from './components/Questions/Questions';
import GameOver from './components/GameOver/GameOver';
import PickCategory from './components/PickCategory/PickCategory';

function App() {
  const [quizStage, dispatch] = useContext(QuizContext);

  /* useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"});
  }, []); */

  return (
    <div className='App'>
      <h1>Web dev quiz</h1>

      {quizStage.gameStage === "Start" && <Welcome />}
      {quizStage.gameStage === "Category" && <PickCategory />}
      {quizStage.gameStage === "Playing" && <Questions />}
      {quizStage.gameStage === "Finished" && <GameOver />}
    </div>
  )
}

export default App
