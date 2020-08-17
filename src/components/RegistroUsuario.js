import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/registroUsuario.css';
import { Button } from 'react-bootstrap';

const RegistroUsuario = ({ history }) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUsuario = ({ target: { value } }) => setUsuario(value);
    const handlePassword = ({ target: { value } }) => setPassword(value);

    const handleSubmit = event => {
        event.preventDefault();
    
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ usuario: usuario, password: password }),
        };
    
        fetch('http://xpense.develotion.com/usuarios.php', requestOptions)
          .then(response => response.json())
          .then(({ codigo }) => { //,apiKey
            if (codigo === 200) {              
              console.log("registro ok");
              history.push('/login');
            } else {
              console.log("ya existe usuario registrado con estos datos");
            }
          })
          .catch(error => console.log('error', error));
      };
    
    return (
        <div>
            <div className="login">
              
      <form onSubmit={handleSubmit}>
      <h2>Registrarse</h2><br></br>
        <label htmlFor="usuario">Usuario: </label>
        <input type="text" name="usuario" value={usuario} onChange={handleUsuario} />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={handlePassword} /><br></br>
        <Button variant="outline-info" type="submit" disabled={!usuario} >Registrarse</Button>{' '}<br></br>
        <Button variant="outline-info" type="button" onClick={() => history.push(`/login`)} >Volver</Button>{' '}             
      </form>
    </div>
        </div>
    )
};

RegistroUsuario.propTypes = {};

export default withRouter(RegistroUsuario);
