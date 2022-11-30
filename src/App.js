import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import Filter from './Filter';
import Thebook from './Thebook';
import {BrowserRouter,Routes,Route,Redirect, useHistory, Navigate, NavLink} from 'react-router-dom';

function App() {
  return (
      <div>
        <BrowserRouter>
        
        <Routes>

        <Route path="/" element = {<Filter />} />

        <Route path = "/specific" element={<Thebook />} />

        </Routes>
        
        </BrowserRouter>
      </div>
  );
}

export default App;
