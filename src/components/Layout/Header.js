import React from 'react';
import { Link } from  'react-router-dom';

function Header(){
    return(
        <header style = {headerStyle}>
            <h1>Krishna Santhosh</h1>
            <Link style = {LinkSytle} to="/" >Home</Link> | <Link style = {LinkSytle} to ="/projects">Projects</Link> |  <Link style = {LinkSytle} to="/contact">Contact me</Link>
        </header>
    )
} 
const headerStyle = {
    background: '#1B3465',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    margin: '0',
    width:'100%',
}

const LinkSytle = {
    color: '#fff',
    textDecoration: 'none' 
}
export default Header;