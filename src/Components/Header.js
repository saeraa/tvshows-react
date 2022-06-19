import React, { memo } from 'react'
import { NavLink } from "react-router-dom"

const Header = memo((props) => {
    return (
        <header>
            <NavLink to="/">Search</NavLink>
            <NavLink to="/watchlist">Watchlist</NavLink>
        </header>
    )
})


export default Header