import React, { Component } from 'react'


export default class Footer extends Component {

    ticked = () => {
        const { todos } = this.props
        const result = todos.filter((todo) => {
            if (todo.done === true) return todo
        }).length
        return result
    }
    updateAll = () => {
        return (event) => {
            this.props.passBack(event.target.checked)
        }
    }

    render() {
        const { todos } = this.props
        return (
            <div className='footer'>
                <input type="checkbox" onChange={this.updateAll()} checked={this.ticked() === todos.length ? true : false} />
                <span > {this.ticked()} completed / {todos.length} All</span>
            </div>
        )
    }
}
