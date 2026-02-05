import React, { useState } from 'react';

const TodoList = ({ initialTasks = [] }) => {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskPriority, setNewTaskPriority] = useState('Moyenne');
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTaskName.trim() !== '') {
            const newTask = {
                id: Date.now(),
                name: newTaskName.trim(),
                priority: newTaskPriority,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setNewTaskName('');
        }
    };

    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const completedTasks = tasks.filter(task => task.completed).length;

    const priorityColors = {
        Haute: '#e74c3c',
        Moyenne: '#f39c12',
        Basse: '#3498db',
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
            <h3>Todo List avec priorités</h3>

            <div style={{ marginBottom: '15px' }}>
                <p><strong>Total des tâches:</strong> {tasks.length}</p>
                <p><strong>Tâches terminées:</strong> {completedTasks}</p>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    placeholder="Rechercher une tâche..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '5px', width: '300px' }}
                />
            </div>

            <form onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Nom de la tâche"
                    style={{ marginRight: '10px', padding: '5px' }}
                />
                <select
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value)}
                    style={{ marginRight: '10px', padding: '5px' }}
                >
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                </select>
                <button type="submit">Ajouter</button>
            </form>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredTasks.map(task => (
                    <li
                        key={task.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '10px',
                            padding: '10px',
                            backgroundColor: '#f9f9f9',
                            borderLeft: `5px solid ${priorityColors[task.priority]}`,
                            textDecoration: task.completed ? 'line-through' : 'none',
                            opacity: task.completed ? 0.7 : 1
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleComplete(task.id)}
                                style={{ marginRight: '10px' }}
                            />
                            <div>
                                <div><strong>{task.name}</strong></div>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '2px 8px',
                                    borderRadius: '3px',
                                    backgroundColor: priorityColors[task.priority],
                                    color: 'white',
                                    fontSize: '0.8em'
                                }}>
                                    {task.priority}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => handleDeleteTask(task.id)}
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

export default TodoList;