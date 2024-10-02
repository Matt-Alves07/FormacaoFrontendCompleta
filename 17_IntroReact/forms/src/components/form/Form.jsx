import classes from './Form.module.css';
import { useState } from 'react';

const Form = ({userName, userEmail}) => {
  const [name, setName] = useState(userName);
  // Outra forma de resolver o problema de campos sem controle
  //const [name, setName] = useState("");
  const [email, setEmail] = useState(userEmail);
  // Outra forma de resolver o problema de campos sem controle
  //const [email, setEmail] = useState("");

  const [personalHistory, setPersonalHistory] = useState("");
  const [role, setRole] = useState("");

  /* const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  } */

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpa as propriedades, e também os campos em tela
    setName("");
    setRole("");
    setEmail("");
    setPersonalHistory("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="name" placeholder="John Doe" value={name || ""} onChange={(e) => setName(e.target.value)}/>
          {/* Exemplo fazendo a mesma coisa, mas, utilizando uma função para isso, mas, mais de uma linha pode ser executada dentro da função */}
          {/* <input type="text" name="name" placeholder="John Doe" value={name || ""} onChange={setName}/> */}
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="john.doe@test.com" value={email || ""} onChange={(e) => setEmail(e.target.value)}/>
          {/* Exemplo fazendo a mesma coisa, mas, utilizando uma função para isso, mas, mais de uma linha pode ser executada dentro da função */}
          {/* <input type="email" name="email" placeholder="john.doe@test.com" value={email || ""} onChange={setEmail}/> */}
        </label>

        <label>
          <span>Histórico pessoal:</span>
          <textarea
            name="personalHistory"
            id="personal-history"
            value={personalHistory}
            onChange={(e) => setPersonalHistory(e.target.value)}
            placeholder="John Doe started graduating in IT. After a while, he was concluding his gradution, when he got a job as a junior software engineer..."
          >
          </textarea>
        </label>

        <label>
          <span>Função no sistema</span>
          <select name="role" id="role-select" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Selecione uma função...">
            <option value="default" selected>Selecione</option>
            <option value="guest">Visitante</option>
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Form