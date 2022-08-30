import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
                <p>
                    <span>Total: <span className="badge badge-info bg-dark">{this.props.total}</span></span>
                    <span className='mx-2'>Complete: <span className="badge badge-success bg-dark m-1">{this.props.complete}</span></span>
                    <span className='mx-2'>Incomplete: <span className="badge badge-warning bg-dark m-1">{this.props.incomplete}</span></span>
                </p>
        )
    }
}
