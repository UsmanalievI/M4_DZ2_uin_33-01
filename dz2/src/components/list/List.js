import React from "react";
import classes from './List.module.css'

const List=({tasks})=>{
    return (
        <>
            <ul>
                {tasks.map(task=>(
                    <li className={classes.listStyle} style={{ borderColor: task.completed ? 'green' : 'red' }}>
                        <div>{task.id}</div>
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;