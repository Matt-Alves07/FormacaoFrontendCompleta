import classes from './Form.module.css';

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome..." />
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Form