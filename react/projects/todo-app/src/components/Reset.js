import React, { Component } from 'react'

export default class Reset extends Component {
    render() {
        return (
                
                <button onClick={this.props.reset} className="btn btn-danger btn-block">Reset</button>

        )
    }
}
