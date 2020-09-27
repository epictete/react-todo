import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'           
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={ this.getStyle() }>
                <p>
                    <label>
                        <input 
                            type="checkbox"
                            checked={ this.props.todo.completed && 'checked' }
                            onChange={ this.props.markComplete.bind(this, id) }
                        />
                        { ' ' }
                        <span style={ this.props.todo.completed ? completedStyle : null }>{ title }</span>
                    </label>
                    <button 
                        style={ btnStyle } 
                        onClick={ this.props.delTodo.bind(this, id) }
                    >Delete</button>
                </p>
            </div>
        )
    }
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
