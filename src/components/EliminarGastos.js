import React, { useState, useEffect } from 'react';
import { object } from "prop-types";

const EliminarGastos = ({history}) => {
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
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
             'apikey': sessionStorage.getItem('apiKey'),
             'Cache-control': "no-cache" },
           
          };   
  
      fetch('http://xpense.develotion.com/gastos.php', requestOptions)
        .then(response => response.json())
        .then(({ codigo, gastos }) => {
            setGastos(gastos);
            if(gastos){
                setGasto(gastos[0].id);
            }
        })
        .catch(error => console.log('error', error));
    }, [ ]);

    const handleGastos = ({target: {value} }) => setGasto(value);
    
    return (
        <div>
           
        </div>
    )
}

EliminarGastos.propTypes = {
    history: object.isRequired,
};


export default EliminarGastos
