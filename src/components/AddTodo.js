import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo(props) {
    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }

    const onChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <form onSubmit={ onSubmit } style={{ display: 'flex' }}>
            <input 
                type="text"
                name="title"
                placeholder=" Add Todo..."
                style={{ flex: '10', padding: '5 px' }}
                value={ title }
                onChange={ onChange }
            ></input>
            <input
                type="submit"
                value="Add"
                className="btn"
                style={{ flex: '1' }}
            ></input>
        </form>
    )
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
