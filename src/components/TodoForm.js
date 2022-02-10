import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit =e => {
        e.preventDefault();

        props.onSubmit({
            id: new Date().getTime(),
            text: input,
        });
        setInput('');
    };

    return (
        <form className='todo-form' onSubmit ={handleSubmit}>
            {props.edit ? (
                <>
                <input 
                    type="text" 
                    placeholder='Update the Todo' 
                    value={input} 
                    name='text' 
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef} 
                />
                <button className='todo-button edit'>Update</button> </>)
            : (
                <>
                <input 
                    type="text" 
                    placeholder='Add a Todo' 
                    value={input} 
                    name='text' 
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef} 
                />
                <button className='todo-button'>Add Todo</button></>)
            }
            
        </form>
    )
}

export default TodoForm