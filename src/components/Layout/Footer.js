import React from 'react';

function Footer(){
    return(
        <header style = {footerStyle}>
            <h4>Made by Krishna Santhosh</h4>
        </header>
    )
} 
const footerStyle = {
    background: '#1B3465',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    margin: '0',
    width:'100%',
    position:'fixed',
    left:'0',
    bottom:'0'
}
export default Footer;