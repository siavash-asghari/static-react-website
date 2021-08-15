import React from 'react'
import Carrousel from './Carrousel';
import Countdown from './Countdown';

function Featured() {
    return (
        <div style={{ position: 'relative' }}>
            <Carrousel />
            <Countdown />
        </div>
    )
}

export default Featured;
