import React, { useState, useEffect } from 'react';
import Pin from '../components/Pin';

export default function Pins(props) {

    const [pins, setPins] = useState([])
    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:3000/pins')
        .then(response => response.json())
        .then(data => { if(isMounted) setPins(data.slice(0,10))})
        return () => {
            isMounted = false;
        }
    }, [pins])

    return pins.map(pin => {
        return <Pin
        key={pin.id} 
        id={pin.id}
        name={pin.name}
        url={pin.url}>
        </Pin>
    })
}