import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Gastos = ({history}) => {

    const [rubro, setRubro] = useState();
    const [rubros, setRubros] = useState([]);

    const [gasto, setGasto] = useState();
    const [gastos, setGastos] = useState([]);

    const [nombre, setNombre] = useState('');
    const [monto, setMonto] = useState('');
    

    const handleGasto = ({ target: { value } }) => setGastos(value);
    const handleMonto = ({ target: { value } }) => setMonto(value);
    const handleNombre = ({target: {value} }) => setNombre(value); 
    const handleRubro = ({target: {value} }) => setRubro(value);


    
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'apikey': sessionStorage.getItem('apiKey') },
           
          };   
  
      fetch('http://xpense.develotion.com/rubros.php', requestOptions)
        .then(response => response.json())
        .then(({ codigo, rubros }) => {
            setRubros(rubros);
            if(rubros && rubros.length > 0){
                setRubro(rubros[0].id);
            }
        })
        .catch(error => console.log('error', error));
    }, [ ]);


    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,'apikey': sessionStorage.getItem('apiKey')},
            body: JSON.stringify({ nombre: nombre, monto: monto , usuario: sessionStorage.getItem('id', ) ,rubro: {rubros}}), //rubro: rubros

           
          };   
  
      fetch('http://xpense.develotion.com/gastos.php', requestOptions)
        .then(response => response.json())
        .then(({ codigo, nombre, monto, usuario }) => {        
                setGastos(gastos);
                if(gastos.length > 0){
                    setGastos([
                        {
                            "nombre": nombre,
                            "monto": monto,
                            "usuario": usuario    
                        },])        
                        localStorage.setItem(setGastos,gastos);              
                }
                
                })
                .catch(error => console.log('error', error));
    },[]);
           
            /* setGastos(gastos);
            if(gastos && gastos.length > 0){
                setGastos(gastos[0].id);
            } */
        
            const handleSubmit = event => {
                event.preventDefault();
            };
                    
    
    return (
        <div className="altaGastos">
            
            <h2>Gastos</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre" >Nombre: </label>
                <input type="text" name="nombre" value={nombre}  onChange={handleNombre}/><br></br>

                <label htmlFor="rubro" >Rubro: </label>    
                <select value={rubro} onChange={handleRubro}>
                {rubros.map(({id, nombre}) => (
                <option value={id} key={id} >{nombre}</option>
                    ))}
                </select><br></br>
                        
                <label htmlFor="monto">Monto: </label>
                <input type="number" name="monto"  value={monto} onChange={handleMonto} /><br></br>
                <Button variant="outline-info" type="submit" disabled={!nombre} >Guardar</Button>{' '}<br></br>
                <br></br>

            </form>    
            

           
        </div>
    );

}


Gastos.propTypes = {};

export default withRouter(Gastos);
