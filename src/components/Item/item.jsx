import React, { Component } from 'react'

export default class item extends Component {
    del = (event) => {
        const { id } = this.props
        console.log(id);
        this.props.passBack(id)
    }

    render() {
        const { id, name, done } = this.props
        return (
            <li className='list'>
                <input type="checkbox" defaultChecked={done} />
                <label > {name}</label>
                <button onClick={this.del} style={{ float: 'right', border: 'none', backgroundColor: 'red', lineHeight: '30px' }}>  Delete</button>
            </li>
        )
    }
}
