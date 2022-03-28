import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './views/signup.jsx';
import Login from './views/login.jsx';
import Admin from './views/admin.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>     
          <Routes> 
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin' element={<Admin/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
