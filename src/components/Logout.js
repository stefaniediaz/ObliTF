import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

const Logout = () => {
    sessionStorage.removeItem('apiKey');
    return (
        <div>
            <input type="button">Cerrar sesion</input>
        </div>
    )
}

Logout.propTypes = {

}

export default Logout
