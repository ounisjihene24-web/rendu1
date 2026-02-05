import React, { useState } from 'react';

const ColorBox = ({ initialColor = '#3498db', colorOptions = [] }) => {
    const [color, setColor] = useState(initialColor);

    const getRandomColor = () => {
        // Si des options de couleur sont fournies, en choisir une aléatoirement
        if (colorOptions.length > 0) {
            const randomIndex = Math.floor(Math.random() * colorOptions.length);
            return colorOptions[randomIndex];
        }

        // Sinon générer une couleur hexadécimale aléatoire
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    };

    const handleColorChange = () => {
        setColor(getRandomColor());
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
            <h3>Boîte de couleur</h3>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: color,
                    margin: '20px auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                }}
            >
                {color}
            </div>
            <button onClick={handleColorChange}>Changer de couleur</button>
            <p style={{ marginTop: '10px' }}>
                Options disponibles: {colorOptions.join(', ')}
            </p>
        </div>
    );
};

export default ColorBox;