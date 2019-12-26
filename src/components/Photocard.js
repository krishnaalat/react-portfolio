import React from 'react';
import ImageCard from '../../src/Profile.jpeg';

function Photocard() {
    return (
        <div>
            <img style = {imgStyle} src = {ImageCard}></img>
        </div>
    )

}

const imgStyle = {
    border: '10px',
    borderradius: '4px',
    padding: '5px',
    width: '400px',
    float: 'right',
    marginTop: '15px'
}


export default Photocard;
