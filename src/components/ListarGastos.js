import React, { useState, useEffect } from 'react';
import{object} from 'prop-types';
//import {withRouter} from 'react-router-dom';


const ListarGastos = ({history} ) => {
    const[gasto, setGasto] = useState();
    const[gastos, setGastos] = useState([]);

    useEffect(() => {
      if(!sessionStorage.getItem('apiKey')){
        history.push('/');
      }
    } , []
    );


    useEffect(() => {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
           apikey: sessionStorage.getItem('apiKey'),
           "Cache-control": "no-cache" },
        };

        const url = 'http://xpense.develotion.com/gastos.php';
        const usuarioId = gastos.map(({idUsuario}) => idUsuario);
      
        
        fetch(`${url}?id=${usuarioId}`, requestOptions)
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
          <select value={gasto} onChange={handleGasto}>
                {gastos.map(({ id, nombre }) => (
                    <option value={id} key={id} >{nombre}</option>
            ))}
        
      </select>
      

            
        </div>

        
    )
}

ListarGastos.propTypes = {
 // history: object.isRequired,
};

//export default withRouter(ListarGastos);
export default ListarGastos;
