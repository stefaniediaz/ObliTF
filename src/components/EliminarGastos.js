import React, { useState, useEffect } from 'react';


const EliminarGastos = () => {
    const[gasto, setGasto] = useState();
    const[gastos, setGastos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'apikey': sessionStorage.getItem('apiKey') },
           
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

export default EliminarGastos
