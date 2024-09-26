/* Exemplo utilizando um parâmetro, que recebe um objeto com as propriedades */
/* const ShowUserName = (props) => { */

/* Exemplo usando destructuring para receber os dados */
const ShowUserName = ({name}) => {
  return (
    <div>
        <h2>O nome informado foi: {name}</h2>
    </div>
  )
}

export default ShowUserName