import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <div>
                <div className=" input-group-text">
                    <input type="text" className=' form-control' placeholder='Please enter your value' />
                </div>
            </div>
        )
    }
}
