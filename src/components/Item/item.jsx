import React, { Component } from 'react'

export default class Item extends Component {
    state = { mouse: true }

    updateTick = (id) => {
        return (event) => {
            // console.log(id, event.target.checked);
            this.props.passTick(id, event.target.checked)
        }
    }
    del = (id) => {
        return () => {
            console.log(id);
            this.props.passDel(id)

        }
    }

    mouseLeave = () => {
        return () => {
            this.setState({ mouse: true })
        }

    }

    mouseEnter = () => {
        return () => {
            this.setState({ mouse: false })
        }

    }
    render() {
        const { name, done, id } = this.props
        return (
            <li className='list' onMouseEnter={this.mouseEnter(done)} onMouseLeave={this.mouseLeave(done)}>
                {/* THE default checked will only happen once */}
                <input onChange={this.updateTick(id)} type="checkbox" checked={done} />
                <span>{name}</span>
                <button onClick={this.del(id)} style={{ display: this.state.mouse ? 'none' : 'block', float: 'right', backgroundColor: 'skyblue', border: 'none' }}>Delete</button>
            </li>
        )
    }
}
