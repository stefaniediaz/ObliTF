import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';


const Logout = (history) => {

    sessionStorage.removeItem('apiKey');
    return (
        <div>
          
        </div>
    )
}

Logout.propTypes = {

}

export default withRouter(Logout) 
