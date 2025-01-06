import React from 'react';

export const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                <ul >
                    {tasks.map(task => (
                        <li key={task.id}>
                           {task.id}  {task.task} {task.completed ? "(Completed)" : "(Not Completed)"}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks Exist.</p>
            )}
        </div>
    );
};

export default TaskList ;