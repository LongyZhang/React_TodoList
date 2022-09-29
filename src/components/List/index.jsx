import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className='list'>
                        <input type="checkbox" />
                        <label >click me</label>
                    </li>
                </ul>
            </div>
        )
    }
}
