import { useState } from "react"

const Data = () => {
    let someData = 10;

    const [anotherData, setAnotherData] = useState(0);

    return (
        <div>
            <div>
                <p>Some data value: {someData}</p>

                <button onClick={() => someData = someData + 5}>Somar +5</button>
                <button onClick={() => someData = 0}>Zerar</button>
            </div>

            <div>
                <p>Another data value: {anotherData}</p>
                <button onClick={() => setAnotherData(anotherData + 5)}>Somar +5</button>
            </div>
        </div>
    )
}

export default Data