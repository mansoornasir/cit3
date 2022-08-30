import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === "") {
            alert("Can not add empty task")
            return;
        }
        else if (this.props.add(this.state.text)) {
            this.setState({ text: "" })
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit} className="form-inline">
                <div className="form-group mb-2">
                    <label htmlFor="text" className='fw-bold'>Add New Task</label>
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
