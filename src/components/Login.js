import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/login.css';
import Alert from 'react-bootstrap/Alert'
import { Button } from 'react-bootstrap';



const Login = ({ history }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');



  const handleUsuario = ({ target: { value } }) => setUsuario(value);
  const handlePassword = ({ target: { value } }) => setPassword(value);

  function validateForm(){
  return handleUsuario.length > 0 && handlePassword.length > 0; 
  }

  const handleSubmit = event => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario: usuario, password: password }),
    };

    fetch('http://xpense.develotion.com/login.php', requestOptions)
      .then(response => response.json())
      .then(({ codigo, apiKey }) => {
        validateForm();
        if (codigo === 200) {
          sessionStorage.setItem('apiKey', apiKey);
          history.push('/gastos');
        } else {  
          console.log("Usuario/contraseña incorrectos");        
          alert("Usuario/contraseña incorrectos");
          sessionStorage.removeItem('apiKey');
          
        }
      })
      .catch(error => JSON.stringify(error));
      
  };

  

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Dashboard</h2>
        <label htmlFor="usuario">Usuario: </label>
        <input type="text" name="usuario" value={usuario} onChange={handleUsuario} />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={handlePassword} /><br></br>
        
        <Button variant="outline-info" type="submit" disabled={!usuario} >Ingresar</Button>{' '}<br></br>
        <Button variant="outline-info" type="button" onClick={() => history.push(`/login/registro`)} >Registrarse</Button>{' '}             
      </form>
    </div>
  );
};

Login.propTypes = {};

export default withRouter(Login);
