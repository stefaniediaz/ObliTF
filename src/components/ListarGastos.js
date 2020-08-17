import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'



const ListarGastos = () => {
    const[gasto, setGasto] = useState();
    const[gastos, setGastos] = useState([]);

    useEffect(() => {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', apikey: sessionStorage.getItem('apiKey') },
        };
    
        fetch('http://xpense.develotion.com/gastos.php?id=7', requestOptions)
          .then(response => response.json())
          .then(({ codigo, gastos }) => {
            setGastos(gastos);
            if (gastos && gastos.length > 0) {
              setGasto(gastos[0].id);
            }
          })
          .catch(error => console.log('error', error));
      }, []);

      const handleGasto = ({ target: { value } }) => setGasto(value);

      

    return (  

        <div>
            <h2>Listado de gastos</h2><br></br>       
           

            <select value={gasto} onChange={handleGasto}>
                {gastos.map(({ id, nombre }) => (
                    <option value={id}>{nombre}</option>
            ))}
      </select>
      <h4>Monto total: {gasto}</h4>

            
        </div>

        
    )
}

ListarGastos.propTypes = {};

export default ListarGastos;
