import React, { Component } from 'react'
import './TodoList.css'

export default class TodoList extends Component {

    render() {
        return (
            <div>
                <input type="text" className='inputBox' placeholder='Please enter task Name' />
            </div>
        )
    }
}
