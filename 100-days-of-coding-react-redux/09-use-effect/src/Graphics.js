import React, { useEffect, useState } from 'react';

function Graphics() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'green',
                    position: 'absolute',
                    top: position.y + 'px',
                    left: position.x + 'px'
                }}
            />
        </div>
    )
}

export default Graphics;