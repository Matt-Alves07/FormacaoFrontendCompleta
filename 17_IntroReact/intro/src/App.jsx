//import { useState } from 'react'
import './App.css'

import Data from './components/Data';
import CityNightImage from './assets/city.jpg';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';
import ConditionalRender from './components/ConditionalRender';

// Project's components
/* import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression'; */

function App() {
  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      {/* Conteúdo introdutório */}
      {/* <h1>Hello world</h1>

      <p>Exemplo do primeiro componente do projeto introdutório:</p>
      <FirstComponent/>
      <br />
      <TemplateExpression/>
      <br />
      <Events/> */}

      <h1>Moving foward with React + Vite</h1>
      {/* <p>Importando imagens da pasta public</p>
      <img src="/img1.jpg" alt="Sei lá" />

      <br />

      <p>Importando imanges como componente</p>
      <img src={CityNightImage} alt="Sei menos ainda" />
      
      <br />

      <p>Exemplo de hook</p>
      <Data />

      <br /> */}

      {/* <p>Exemplo de renderização de lista</p>
      <ListRender /> */}

      <ConditionalRender />

      <br />

      <ShowUserName name="Test123" />
    </div>
  )
}

export default App
