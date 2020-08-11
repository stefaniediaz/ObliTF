import React, { useState } from 'react';
import Tarea from './Tarea';

const TodoList = () => {
  const [nombre, setNombre] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleNombre = ({ target: { value } }) => setNombre(value);

  const agregarTarea = evt => {
    evt.preventDefault();
    if (nombre) {
      setTareas([...tareas, nombre]);
      setNombre('');
    }
  };

  const handleBorrarTarea = nombre => {
    setTareas(tareas.filter(tarea => tarea !== nombre));
  };

  return (
    <div>
      <h3>Lista de tareas:</h3>

      {tareas.length === 0 ? (
        <h3>No hay tareas. Gozate.</h3>
      ) : (
        tareas.map((nombreTarea, index) => <Tarea key={index} nombre={nombreTarea} borrarTarea={handleBorrarTarea} />)
      )}

      <form onSubmit={agregarTarea}>
        <label htmlFor="tarea">Nueva tarea:</label>
        <input type="text" name="tarea" value={nombre} onChange={handleNombre} />
        <input type="submit" value="Agregar Tarea" disabled={!nombre} />
      </form>
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
