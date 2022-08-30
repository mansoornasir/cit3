import React, { Component } from "react";
import "../App.css";
export default class Item extends Component {
    render() {
        return (
            <li key={this.props.key} className="list-group-item">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        name="status"
                        id={this.props.text}
                        onClick={(e) => this.props.changeStatus(this.props.text)}
                        checked={this.props.status === "complete" ? "checked" : ""}
                        className="custom-control-input mx-2"
                    />
                    <label
                        htmlFor={this.props.text}
                        className={
                            "custom-control-label " +
                            (this.props.status === "complete"
                                ? "text-decoration-line-through text-muted"
                                : "text-decoration-none")
                        }
                    >
                        {this.props.text}
                    </label>
                </div>
            </li>
        );
    }
}
