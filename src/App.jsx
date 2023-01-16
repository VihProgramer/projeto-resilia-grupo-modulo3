import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home.jsx';
import Contacts from './Contacts.jsx';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <header>
          <img src="#" alt="" />
          <input type="text" />
      </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
    </Routes>
      <footer className='footermain'>
        <div>
          <h5>
            Atendimento
          </h5>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Contacts'>Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>
            Institucional
          </h5>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Contacts'>Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>
            Categorias
          </h5>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Contacts'>Contato</Link>
            </li>
          </ul>
          <h5>
            Categorias
          </h5>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Contacts'>Contato</Link>
            </li>
          </ul>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
