import React, { useState } from 'react';

function Form(props) {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='text'
                id='new-todo-input'
                value={text}
                onChange={handleChange}
                autoComplete='off'
            />
            <button type='submit'>Add todo</button>
        </form> 
    )
}

export default Form;
