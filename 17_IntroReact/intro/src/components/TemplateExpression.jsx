import React from 'react'

const TemplateExpression = () => {
    const objeto = {
        age: 30,
        name: "Teste 123"
    };

    return (
        <div>
            <p>Olá {objeto.name}, tendo {objeto.age} você deveria saber que:</p>
            2 + 2 = {2 + 2}
        </div>
    )
}

export default TemplateExpression