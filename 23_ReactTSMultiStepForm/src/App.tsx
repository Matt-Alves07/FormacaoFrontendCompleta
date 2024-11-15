import './App.css';

import { FormEvent } from 'react';
import { FiSend } from 'react-icons/fi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import { useState } from 'react';
import { useForm } from './hooks/useForm';

import Steps from './components/Steps/Steps';
import Thanks from './components/Thanks/Thanks';
import UserForm from './components/UserForm/UserForm';
import ReviewForm from './components/ReviewForm/ReviewForm';

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string,
}

const formTemplate : FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key: string, value: string) => {
    setData((previous) => {
      return { ...previous, [key]: value };
    });
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} updateFieldHandler={updateFieldHandler} />
  ];

  const { changeSteps, currentStep, currentComponent, isLastStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Evaluate our services</h2>

        <p>We're glad working together, and we'll be even more pleased with your feedback</p>
      </div>

      <div className="form-container">
        <Steps currentStep={currentStep}/>

        <form onSubmit={(e:FormEvent) => changeSteps(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            <button
              type='button'
              disabled={currentStep <= 0}
              onClick={(e:FormEvent) => changeSteps(currentStep - 1, e)}
            >
              <GrFormPrevious />
              <span>Back</span>
            </button>

            {
              isLastStep
                ? (
                  <button type="button">
                    <span>Send</span>
                    <FiSend />
                  </button>
                )
                : (
                  <button
                    type='submit'
                    disabled={currentStep >= formComponents.length - 1}
                  >
                    <span>Next</span>
                    <GrFormNext />
                  </button>
                )
            }

            {/* <button
              type='submit'
              disabled={currentStep >= formComponents.length - 1}
            >
              <span>Next</span>
              <GrFormNext />
            </button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
