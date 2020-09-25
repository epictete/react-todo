import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={ headerStyle }>
            <h1>TodoList</h1>
            <Link style={ linkStyle } to="/">Home</Link> | <Link style={ linkStyle } to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}

export default Header;