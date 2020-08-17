import React from 'react'
import {NavLink, withRouter}  from 'react-router-dom'



export const Navbar = () => {
    const getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    return (
        <div>
            
        </div>
    )
}
