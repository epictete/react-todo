import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'           
        }
    }

    const { id, title, completed } = props.todo;

    return (
        <div style={ getStyle() }>
            <p>
                <label>
                    <input 
                        type="checkbox"
                        checked={ completed && 'checked' }
                        onChange={ props.markComplete.bind(this, id) }
                    />
                    { ' ' }
                    <span style={ completed ? completedStyle : null }>{ title }</span>
                </label>
                <button 
                    style={ btnStyle } 
                    onClick={ props.delTodo.bind(this, id) }
                >Delete</button>
            </p>
        </div>
    )
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}

const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

export default TodoItem;
