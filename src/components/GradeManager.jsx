import React, { useState } from 'react';

const GradeManager = ({ initialNotes = [] }) => {
    const [notes, setNotes] = useState(initialNotes);
    const [newNote, setNewNote] = useState('');

    const calculateAverage = () => {
        if (notes.length === 0) return 0;
        const sum = notes.reduce((total, note) => total + note, 0);
        return (sum / notes.length).toFixed(2);
    };

    const handleAddNote = (e) => {
        e.preventDefault();
        const noteValue = parseFloat(newNote);

        // Vérification des contraintes
        if (isNaN(noteValue) || noteValue < 0 || noteValue > 20) {
            alert("La note doit être un nombre entre 0 et 20");
            return;
        }

        setNotes([...notes, noteValue]);
        setNewNote('');
    };

    const handleDeleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
            <h3>Gestionnaire de notes</h3>

            <form onSubmit={handleAddNote} style={{ marginBottom: '15px' }}>
                <input
                    type="number"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Entrez une note (0-20)"
                    min="0"
                    max="20"
                    step="0.5"
                    style={{ marginRight: '10px', padding: '5px' }}
                />
                <button type="submit">Ajouter</button>
            </form>

            <div style={{ marginBottom: '15px' }}>
                <p><strong>Moyenne:</strong> {calculateAverage()}/20</p>
                <p><strong>Nombre de notes:</strong> {notes.length}</p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {notes.map((note, index) => (
                    <li
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '5px',
                            padding: '5px',
                            backgroundColor: '#f5f5f5'
                        }}
                    >
                        <span>Note {index + 1}: {note}/20</span>
                        <button
                            onClick={() => handleDeleteNote(index)}
                            style={{
                                backgroundColor: '#e74c3c',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GradeManager;