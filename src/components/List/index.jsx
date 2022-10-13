import React, { Component } from 'react'
import Item from '../../components/Item/item'
export default class List extends Component {
    render() {
        const { todos, passTick ,passDel} = this.props
        return (
            <ul>
                {todos.map((todo) => {
                    return <Item key={todo.id} {...todo} passTick={passTick} passDel={passDel} />
                })}
            </ul>
        )
    }
}
