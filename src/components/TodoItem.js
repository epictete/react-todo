import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
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
                        { title }
                    </label>
                    <button 
                        style={ btnStyle } 
                        onClick={ this.props.delTodo.bind(this, id) }
                    >x</button>
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
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
