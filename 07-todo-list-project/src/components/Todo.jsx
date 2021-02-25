import React, { useState } from 'react';
import '../App.css';

function TodoList(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState(props.name);

    function handleChange(e) {
        setNewName(e.target.value);
    }
    console.log(newName)

    function handleEditSave() {
        props.editTask(props.id, newName);
        setNewName('');
        setEditing(false)
    }

    const viewTemplate = (
        <div className='list'>
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
                    onClick={() => setEditing(true)}
                >Edit
                </button>
                <button
                    type='button'
                    onClick={() => props.deleteTask(props.id)}
                >Delete
                </button>
            </div>
        </div>
    );
    const editTemplate = (
        <div className='edit-div'>
            <div className='edit-input'>
                <label htmlFor={props.id}>New name for {props.name}</label>
                <input
                    type='text'
                    id={props.id}
                    onChange={handleChange}
                    value={newName}
                />
            </div>
            <div className='button-container'>
                <button type='button' onClick={() => setEditing(false)}>Cancel</button>
                <button type='button' onClick={handleEditSave}>Save</button>
            </div>
        </div>
    );

    return (
        <li>{isEditing === false ? viewTemplate : editTemplate}</li>
    )
}

export default TodoList;
