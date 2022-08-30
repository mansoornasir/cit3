import React, { Component } from 'react'

export default class Filter extends Component {
    constructor() {
        super();
        this.state = {
            filter: "all"
        }
    }
    changeFilter = (e) => {
        if(e.target.id === "all") {
            this.setState({
                filter: "all"
            })
            this.props.setFilter("all")
        }
        else if(e.target.id === "complete") {
            this.setState({
                filter: "complete"
            })
            this.props.setFilter("complete")
        }
        else if(e.target.id === "incomplete") {
            this.setState({
                filter: "incomplete"
            })
            this.props.setFilter("incomplete")
        }
        
    }
    render() {
        return (
            <div>
                <button 
                    className={(this.state.filter === "all" ? "active disabled " : "") +'btn btn-outline-primary mx-2'}
                    id="all"
                    name="all"
                    onClick={e => this.changeFilter(e)}
                    >All
                </button>
                <button  
                    className={(this.state.filter === "complete" ? "active disabled " : "") +'btn btn-outline-primary mx-2'}
                    id="complete"
                    name="complete"
                    onClick={e => this.changeFilter(e)}
                    >Complete</button>
                <button  
                    className={(this.state.filter === "incomplete" ? "active disabled " : "") +'btn btn-outline-primary mx-2'}
                    id="incomplete"
                    name="incomplete"
                    onClick={e => this.changeFilter(e)}
                    >Incomplete</button>
            </div>
        )
    }
}
