import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    handleChange = (e) => {
        this.setState({text: e.target.value})
        this.props.search(e.target.value)
    }
    render() {
        return (
            <form className="form-inline">
                <div className="form-group mb-2">
                    <label htmlFor="text" className='fw-bold'>Search</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                        className="form-control"
                    />
                </div>
            </form>
        )
    }
}
