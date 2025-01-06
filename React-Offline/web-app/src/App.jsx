import React from 'react';
import TaskList from './TaskList.jsx';

const tasks = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Walk the dog", completed: true },
    { id: 3, task: "Complete homework", completed: false }
];

const ParentComponent = () => {
    return (
        <div>
            <h1>Task List</h1>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default ParentComponent;
