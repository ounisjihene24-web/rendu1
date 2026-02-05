import React, { useState } from 'react';

const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément" }) => {
    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItem.trim() !== '') {
            setItems([...items, newItem.trim()]);
            setNewItem('');
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
            <h3>Gestionnaire de liste</h3>
            <form onSubmit={handleAddItem}>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder={placeholder}
                    style={{ marginRight: '10px', padding: '5px' }}
                />
                <button type="submit">Ajouter</button>
            </form>

            <ul style={{ marginTop: '15px' }}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListManager;