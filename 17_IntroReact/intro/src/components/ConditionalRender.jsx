const ConditionalRender = () => {
    const exibir = false;

    return (
        <div>
            <h3>Isso será exibido?</h3>
            {/* Condicional padrão, verificando apenas se um valor bate com o esperado */}
            {/* {exibir && <p>Se o booleano for true, sim.</p>}
            {!exibir && <p>Se o booleano for false, não.</p>} */}

            {/* Condicional com um ternário, permitindo o uso de um else na condição */}
            {
                exibir
                    ? (
                        <div>
                            <p>Se o booleano for true, sim.</p>
                        </div>
                    )
                    : (
                        <div>
                            <p>Se o booleano for false, não.</p>
                        </div>
                    )
            }
        </div>
    )
}

export default ConditionalRender