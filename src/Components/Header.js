import React, { memo } from 'react'
import { NavLink } from "react-router-dom"

const Header = memo((props) => {

    console.log(window.location.pathname)

    let activeStyle = {
        // opacity: 0,
        display: "none"
    }

    return (
        <>
            <div id="skiptocontent"><a href="#maincontent">skip to main content</a></div>
            <header>
                <h1>TV Shows</h1>

                {/* <nav> */}
                <NavLink to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }><h2>Search</h2></NavLink>
                <NavLink to="/watchlist"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }><h2>Watchlist</h2></NavLink>
                {/* </nav> */}
            </header>
        </>
    )
})


export default Header