import React from 'react';
import LifecycleDemo from './LifecycleDemo';
import UpdatingDemo from './LifeCycleUpdate';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';
import GradeManager from './components/GradeManager';
import ListManager from './components/ListManager';

function App() {
    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>React Components Workshop</h1>

            {/* Lifecycle Components */}
            <LifecycleDemo />
            <UpdatingDemo />

            {/* Custom Components */}
            <Counter initialCount={0} step={1} />
            <Counter initialCount={10} step={5} />

            <ColorBox
                initialColor="#3498db"
                colorOptions={['#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c']}
            />

            <GradeManager initialNotes={[15, 12.5, 18]} />

            <ListManager
                initialItems={['React', 'JavaScript', 'CSS']}
                placeholder="Ajouter une technologie"
            />
        </div>
    );
}

export default App;
