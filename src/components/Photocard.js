import React from 'react'

function Photocard() {
    return (
        <div>
            <img style = {imgStyle} src = {require('C:\\react-node\\portfolio\\src\\Profile.jpeg')}></img>
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
