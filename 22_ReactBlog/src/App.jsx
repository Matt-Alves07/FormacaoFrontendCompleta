import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
