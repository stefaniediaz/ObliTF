import React from 'react';
import { string, func } from 'prop-types';

const Tarea = ({ nombre, borrarTarea }) => (
  <div>
    <span>{nombre}</span>
    <input type="button" value="Borrar" onClick={() => borrarTarea(nombre)} />
  </div>
);

Tarea.propTypes = {
  nombre: string,
  borrarTarea: func,
};

export default Tarea;
