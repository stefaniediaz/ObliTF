import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Gastos from './components/Gastos';
import PageNotFound from './components/PageNotFound';
import TodoList from './components/TodoList';
import  RegistroUsuario  from './components/RegistroUsuario';


const App = () => {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/todolist" component={Gastos} exact />
        <Route path="/Gastos " component={TodoList} exact />  
        <Route path="/" component={Login} exact />
        <Route path="/" component={RegistroUsuario} exact />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
