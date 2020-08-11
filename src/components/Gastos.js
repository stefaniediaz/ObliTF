import React, { useState, useEffect } from 'react'


const Gastos = () => {

    const [rubro, setRubro] = useState();
    
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'apikey': sessionStorage.getItem('apiKey') },
           
          };
   
  
      fetch('http://xpense.develotion.com/rubros.php', requestOptions)
        .then(response => response.json())
        .then(( result => {} )          
        .catch(error => console.log('error', error);
    });

    const handleRubro = ({target:{value}}) => setRubro(value);


    return (
        <div>
            <h2>Gastos</h2>
            <select value={rubro} onChange={handleRubro}></select>
        </div>
    )
}

Gastos.propTypes = {

}

export default Gastos;
