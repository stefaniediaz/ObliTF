import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import Gastos from './components/Gastos';
import PageNotFound from './components/PageNotFound';
import  RegistroUsuario  from './components/RegistroUsuario';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ListarGastos from './components/ListarGastos';
import GastosPorRubro from './components/GastosPorRubro';



const App = () => {
  return (
    <div className="App">
     
      <Switch>
        
        <Route path="/navbar" component={Navbar} exact />    
        <Route path="/gastos" component={Gastos} exact />  
        <Route path="/" component={Login} exact />
        <Route path="/login/registro" component={RegistroUsuario} exact />
        <Route path="/" component={RegistroUsuario} exact />
        <Route path="/logout" component={Logout} exact />
        
        <Route path="/gastosPorRubro" component={GastosPorRubro} exact />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};


 


export default App;
 

