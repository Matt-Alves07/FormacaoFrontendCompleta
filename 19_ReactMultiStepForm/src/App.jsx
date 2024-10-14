import './App.css';
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

/* Project's components */
import Steps from './Components/Steps/Steps';
import UserForm from "./Components/UserForm/UserForm";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ThanksForm from "./Components/ThanksForm/ThanksForm";

/* Hooks */
import { useForm } from './Hooks/useForm';

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value};
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ThanksForm data={data} />
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents);

  return (
    <div className='app'>
      <div className="header">
        <h2>Nos avalie</h2>

        <p>Ficamos felizes com a sua compra, e ficaremos ainda mais com o seu feedback</p>
      </div>

      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            <button type="button" disabled={isFirstStep} onClick={(e) => changeStep(currentStep - 1, e)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
