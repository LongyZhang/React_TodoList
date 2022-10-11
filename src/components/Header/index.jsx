import React, { Component } from 'react'


export default class Header extends Component {


    f1 = (event) => {
        if (event.keyCode == 13 && event.target.value != '') {
            // this.setState()
            console.log(event.target.value);

            const todoobj = { id: this.props.todos.length + 1, name: event.target.value, done: false }
            this.props.passBack(todoobj)
            event.target.value = ''
        }

        // console.log(event.target.value, event.keyCode);

    }
    render() {
        // console.log(this.props.b);
        // console.log(this.props.a);
        return (
            <div >
                <input onKeyUp={this.f1} type="text" className='header' placeholder='Please enter your value, confrim by enter' />
            </div>
        )
    }
}
