import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
    render() {
        return (
            <div>
                {this.props.temp.length > 0 ? <ul className="list-group list-group-flush">
                {
                    this.props.temp.map(task => 
                                                <Item 
                                                    text={task.text} 
                                                    status={task.status} 
                                                    changeStatus={this.props.changeStatus}
                                                    key={task.text}
                                                />
                                        )
                }
            </ul> : null}
                {this.props.tasks.length === 0 ? <p className="lead">List is empty :(</p> : null}
                {this.props.temp.length !== 0 ? <p className="lead"></p> : <ul className="list-group list-group-flush">
                    {
                        this.props.tasks.map(task => 
                                                    <Item 
                                                        text={task.text} 
                                                        status={task.status} 
                                                        changeStatus={this.props.changeStatus}
                                                        key={task.text}
                                                    />
                                            )
                    }
                </ul>}
            </div>
        )
    }
}
