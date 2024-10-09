import './ImcCalc.css';
import { useState } from 'react';
import Button from '../Button/Button';

const ImcCalc = ({calcImc}) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();

        setHeight("");
        setWeight("");
    }

    const validDigits = (text) => 
        text.replace(/[^0-9,]/g, "");

    const handleHeightChange = (e) =>
        setHeight(validDigits(e.target.value));

    const handleWeightChange = (e) =>
        setWeight(validDigits(e.target.value));

    return (
        <div id="calc-container">
            <h2>IMC Calculator</h2>

            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Height:</label>

                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Example 1,75"
                            onChange={(e) => handleHeightChange(e)}
                            value={height}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Weight:</label>

                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="Example 70,5"
                            onChange={(e) => handleWeightChange(e)}
                            value={weight}
                        />
                    </div>
            </div>

                <div className="action-control">
                    <Button id="submit-btn" text="Calculate" action={(e) => calcImc(e, height, weight)} />
                    <Button id="clear-btn" text="Clear" action={clearForm}/>
                </div>
            </form>
        </div>
    )
}

export default ImcCalc