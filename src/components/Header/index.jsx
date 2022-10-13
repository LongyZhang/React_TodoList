import React, { Component } from 'react'

export default class Header extends Component {

    f1 = (event) => {
        // console.log(event.target.value);

        if (event.keyCode === 13 && event.target.value !== '') {
            console.log(event.target.value);
            this.props.passValue({ name: event.target.value, id: Date.now(), done: false })
            event.target.value = ''
        }
        // this.props.passValue(event.target.value)
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.f1} type="text" className='header' placeholder='Please enter your value' />
            </div>
        )
    }
}
