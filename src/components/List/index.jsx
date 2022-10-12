import React, { Component } from 'react'
import Item from '../Item/item'


export default class List extends Component {

    delTodo = (id) => {
        const { todos } = this.props
        const newTodos = todos.filter(item => item.id != id)
        this.props.passBack(newTodos)
        console.log(newTodos);
    }


    render() {
        const { todos, checkUpdate, delTodos } = this.props
        return (
            // we can retrun anything in return function
            // it is not only for div

            // app.jsx passed the state to be props from list class
            // in this class we received the todos
            // it returns <Items/> basing on size of todos
            // we map it


            // we use ...todo to pass all information from todo to Item
            <ul >
                {todos.map((todo) => {
                    return <Item key={todo.id} {...todo} passBack={this.delTodo} checkUpdate={checkUpdate} delTodos={delTodos} />
                })}
            </ul>

        )
    }
}
