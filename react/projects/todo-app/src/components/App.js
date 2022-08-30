import React, { Component } from 'react'
import Info from './Info'
import '../App.css';
import Add from './Add'
import List from './List';
import Reset from './Reset';
import Search from './Search'
import Filter from './Filter'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ "text": "Java How to Program", "status": "complete" },
            { "text": "Let's Learn C++", "status": "incomplete" },
            { "text": "Object Oriented Programming Structure", "status": "incomplete" },
            { "text": "Procedural Programming using COBOL", "status": "complete" },
            { "text": "Python for Data Science and Machine Learning", "status": "incomplete" },
            { "text": "Deep Learning using Keras and PyTorch", "status": "incomplete" }],
            temp: [],
            mode: "add",
            search: "",
            filter: "all"
        }
    }
    addTask = (text) => {
        this.setState({
            tasks: this.state.tasks.concat({ "text": text, "status": "incomplete" })
        })
        return true;
    }
    removeTask = (text) => {
        this.setState({ tasks: this.state.tasks.filter(task => task.text !== text) })
    }
    reset = () => {
        this.setState({ tasks: [] })
    }
    changeStatus = (text) => {
        // const index = this.state.tasks.findIndex(task => task.text === text)
        // this.setState({
        //     tasks: this.state.tasks[index].status
        // })
        const newList = this.state.tasks.map(task => {
            if (task.text === text) {
                return { text, status: task.status === "incomplete" ? "complete" : "incomplete" }
            }
            return task;
        })
        this.setState({
            tasks: newList
        })
    }
    changeMode(e) {
        if (e.target.id === "search") {
            this.setState({
                mode: "search"
            })
        }
        if (e.target.id === "add") {
            this.setState({
                mode: "add"
            })
        }
    }
    search = (text) => {
        this.setState({
            search: text
        })
    }
    setFilter = (filterName) => {
        this.setState({
            filter: filterName
        })
        if(filterName === "all") {
            this.setState({temp: []})
            return;
        }
        else {
            const newList = this.state.tasks.filter(task => {
            if(task.status === filterName) {
                return task;
            }
        })
        this.setState({
            temp: newList
        })
        }
        
    }
    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center mt-3'>Things To Do</h1>
                <button 
                        className='btn btn-primary m-4'
                        id="add"
                        onClick={e => this.changeMode(e)}>
                            <i className="bi bi-plus"></i>
                </button>
                <button 
                    className='btn btn-success m-4' 
                    id="search" 
                    onClick={e => this.changeMode(e)}>
                        <i className="bi bi-search"></i>
                </button>
                {this.state.mode === "add" && <Add add={this.addTask} />}
                {this.state.mode === "search" && <Search search={this.search}/>}
                <span className="m-5"></span>
                <List tasks={this.state.tasks} changeStatus={this.changeStatus} temp={this.state.temp}/>
                <hr className="mt-4" />
                <Filter setFilter={this.setFilter}/>
                <hr className="mt-4" />
                <Info
                    total={this.state.tasks.length}
                    complete={this.state.tasks.filter(task => task.status === "complete").length}
                    incomplete={this.state.tasks.filter(task => task.status === "incomplete").length}
                />
                <Reset reset={this.reset} />
            </div>
        )
    }
}
