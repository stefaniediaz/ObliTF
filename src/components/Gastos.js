import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import '../styles/gastos.css';
import { Button } from 'react-bootstrap';
import { object, string } from "prop-types";
import Navbar from "./Navbar";
import ListarGastos from './ListarGastos';




const Gastos = ({ history}) => { //addGasto, removeGasto, gasto,

    const [rubro, setRubro] = useState();
    const [rubros, setRubros] = useState([]);

    const [gasto, setGasto] = useState();
    const [gastos, setGastos] = useState([]);

    const [nombre, setNombre] = useState('');
    const [monto, setMonto] = useState('');
    const[usuario, setUsuario] = useState('');
    
    //const handleGasto = ({ target: { value } }) => setGastos(value);
    const handleMonto = ({ target: { value } }) => setMonto(value);
    const handleNombre = ({target: {value} }) => setNombre(value); 
    const handleRubro = ({target: {value} }) => setRubro(value);

    

    const agregarGasto = event => {
        console.log("hace algo");
        event.preventDefault();
    };

    useEffect(() => {
        if(!sessionStorage.getItem('apiKey')){
          history.push('/');
        }
      } , []
      );
    
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
            headers: { 'Content-Type': 'application/json' ,
            'apikey': sessionStorage.getItem('apiKey'),
            "Cache-control": "no-cache"  },
            body: JSON.stringify({ nombre: nombre, monto: monto ,idUsuario : usuario,idRubro: rubro }), //data            
          };

         
        const url = 'http://xpense.develotion.com/gastos.php';
        const usuarioId = gastos.map(({ idUsuario}) => idUsuario);
          
  
        fetch(`${url}?id=${usuarioId}`, requestOptions) //?id=${usuarioId}
            .then(response => response.json())
            .then(({ nombre, monto, idUsuario, idRubro}) => {        
                
                setGastos(gastos);
                if(gastos &&  gastos.length > 0){
                    setGastos([
                        {
                            "nombre": nombre,
                            "monto": monto,
                            "usuario": idUsuario, 
                            "rubro": idRubro

                        }
                   ]                   
                        
                     );
                    //setGastos.Add(gastos);
                 console.log("entra acá ..."); 
                }else{
                    console.log("no hace nada");
                }  
                
                })
                .catch(error => console.log('error', error));     
        
            }, []);  
                    
    
    return (
        <div className="altaGastos">
            <Navbar></Navbar>
            <h3>Ingresar nuevo gasto</h3><br></br>
            <form onSubmit={agregarGasto}>
                
                <input type="text" value={nombre} placeholder = "Ingrese nombre" onChange={handleNombre}/><br></br><br></br>
               
                <input type="number" value={monto} placeholder = "Ingrese monto" onChange={handleMonto}/><br></br><br></br>
                
                <label ></label>
                <select value={rubro} onChange={handleRubro}>
                {rubros.map(({id, nombre}) => (
                <option value={id} key={id} >{nombre}</option>
                    ))}
                </select><br></br><br></br>

                
                
                <Button variant="outline-info" type="submit" disabled={!nombre} >Guardar</Button>{' '}<br></br>
                <br></br><br></br>
                </form>
                <h4>Gastos</h4>
                <ListarGastos></ListarGastos>         
                
                
                    
                </div>
                
                
        
    );

}


Gastos.propTypes = {
    history: object.isRequired,
  //  nombre: string.isRequired
};

export default withRouter(Gastos);
