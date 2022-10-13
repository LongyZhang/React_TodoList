import React, { Component } from 'react'

export default class Footer extends Component {

    ticked = () => {
        const { todos } = this.props
        // const result = todos.reduce((sum, todo) => {
        //     if (todo.done == true) return sum += 1

        // }, 0)
        const result = todos.filter((todo) => {
            if (todo.done === true) return todo
        }).length
        return result
    }

    f1 = (event) => {
        console.log(event.target.checked);
        this.props.passBack(event.target.checked)
    }

    render() {
        const { todos } = this.props
        return (
            <div>
                <input type="checkbox" onChange={this.f1} checked={todos.length !== 0 && this.ticked() === todos.length ? true : false} />
                <span> {this.ticked()} Jobs Completed  / {todos.length}   All</span>
            </div>
        )
    }
}
