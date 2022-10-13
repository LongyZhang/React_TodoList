import React, { Component } from 'react'

export default class item extends Component {

    state = { mouse: false }



    f1 = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    f2 = (flag) => {

        return () => {
            this.setState({ mouse: flag })
        }
    }

    // handle check
    // f3 = (event) => {
    //     const { id } = this.props
    //     console.log(id);
    //     console.log(event.target.checked);
    //     // this.props.p(event.target.checked)
    // }

    // if we pass function by adding id, it is better to use return function as default


    f3 = (id) => {
        return (event) => {
            console.log(id, event.target.checked);
            this.props.checkUpdate(id, event.target.checked)
        }
    }

    // this is about curry function

    // del = (id) => {
    //     return (event) => {
    //         this.props.delTodos(id)
    //     }
    // }

    del = (id) => {
        this.props.delTodos(id)
    }

    // this is none curry function


    render() {
        const { id, name, done } = this.props
        return (
            <li style={{ backgroundColor: this.state.mouse ? 'skyblue' : 'white' }} className='list' onMouseLeave={this.f1(false)} onMouseEnter={this.f2(true)}>
                <input type="checkbox" defaultChecked={done} checked={done} onChange={this.f3(id)} />
                <label > {name}</label>
                <button onClick={() => { this.del(id) }} style={{ display: this.state.mouse ? 'block' : 'none', float: 'right', marginRight: '5px', borderRadius: '5px', border: 'none', backgroundColor: 'red', lineHeight: '30px' }}>  Delete</button>
            </li>
        )
    }
}
