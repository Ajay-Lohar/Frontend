import React from 'react';

export const TaskList = ({ task }) => {
    return (
        <div>
             
            {task.length > 0 ? (
                <ul >
                    {task.map(task => (
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