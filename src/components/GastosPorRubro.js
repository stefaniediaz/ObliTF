import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GastosPorRubro = props => {
    return (
        <div>
            <h2>Gastos por rubro</h2>
        </div>
    )
}

GastosPorRubro.propTypes = {
//history: object.isRequired
}

export default withRouter(GastosPorRubro) 
