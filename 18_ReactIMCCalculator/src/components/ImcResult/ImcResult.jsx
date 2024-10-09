import Button from '../Button/Button';
import './ImcResult.css';

const ImcResult = ({data, imc, info, infoClass, resetImc}) => {
  return (
    <div id='result-container'>
        <p id="imc-number">Your IMC: <span className={infoClass}>{imc}</span></p>

        <p id="imc-info">Current situation: <span className={infoClass}>{info}</span></p>

        <h3>Check the classifications:</h3>

        <div id="imc-table">
            <div className="table-header">
                <h4>IMC</h4>
                <h4>Classification</h4>
                <h4>Obesity?</h4>
            </div>

            {data.map((item) => (
                <div className="table-data" key={item.info}>
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.obesity}</p>
                </div>
            ))}

            <Button id="back-btn" text="Calculate again" action={resetImc}/>
        </div>
    </div>
  )
}

export default ImcResult