import React from 'react';

export function Room(props) {

    return (
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial color="red" />
        </mesh>
    )
}