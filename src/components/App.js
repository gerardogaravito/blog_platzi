import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';

const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route exact path='/' element={<Users />} />
      <Route exact path='/tareas' element={<Tareas />} />
    </Routes>
  </BrowserRouter>
);

export default App;
