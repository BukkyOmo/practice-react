import React, { useState } from 'react';
import '../App.css';

function TodoList(props) {
    return (
        <li className='list'>
            <div>
                <input
                    id={props.id}
                    type='checkbox'
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                {props.name}
            </div>
            <div className='button-container'>
                <button
                    type='button'
                    onClick={() => props.editTask(props.id, props.name)}
                >
                    Edit
                    </button>
                <button
                    type='button'
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default TodoList;
