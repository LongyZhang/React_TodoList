import React, { Component } from 'react'


export default class List extends Component {
    render() {
        return (
            <div >
                <ul >
                    <li className='list'>
                        <input type="checkbox" />
                        <label >click me</label>
                        <button >Delete</button>
                    </li>
                    <li className='list'>
                        <input type="checkbox" />
                        <label >click me</label>
                        <button >Delete</button>
                    </li>
                    <li className='list'>
                        <input type="checkbox" />
                        <label >click me</label>
                        <button >Delete</button>
                    </li>

                </ul>
            </div>
        )
    }
}
