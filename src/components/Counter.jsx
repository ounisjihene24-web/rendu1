import React, { useState } from 'react';

const Counter = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + step);
    };

    const decrement = () => {
        setCount(count - step);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
            <h3>Compteur</h3>
            <p>Valeur actuelle: <strong>{count}</strong></p>
            <p>Step: {step}</p>
            <button onClick={decrement} style={{ marginRight: '10px' }}>
                -{step}
            </button>
            <button onClick={increment}>
                +{step}
            </button>
        </div>
    );
};

export default Counter;