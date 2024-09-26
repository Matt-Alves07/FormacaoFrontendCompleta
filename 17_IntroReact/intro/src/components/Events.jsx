import React from 'react'

const Events = () => {
    const handleClick = () => {
        console.log("Ahhhh le lek lek lek lek lek")
    }

    return (
        <div>
            <div>
                <button onClick={() => handleClick()}>Clique aqui!</button>
            </div>
        </div>
    )
}

export default Events