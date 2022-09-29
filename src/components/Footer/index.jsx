import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        )
    }
}
