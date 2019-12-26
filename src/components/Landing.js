import React from 'react';
import Background from '../background.jpg';

export default function Landing() {
    return (
        <div className='bg' >
            
        </div>
    )
    }

const bgStyle = {
        backgroundImage: `url(${Background})`,
        height: '100%', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
}