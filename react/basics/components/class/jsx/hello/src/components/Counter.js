import { Component } from "react";

export default class Counter extends Component {
  constructor() {  // here is one state which name is count and value is 0
    super();
    this.state = {
      count: 0
    }
  }
  render() {
    const handleClick = () => {  //You should not create normal function in class
      // this.state = {  you can't directly modify state
      //   count: 1
      // }

      this.setState({
        count: this.state.count + 1
      })
    }
    const handleClick1 = () => {
      this.setState({
        count: this.state.count - 1
      })
    }
    const handleClick2 = () => {
      this.setState({
        count: 0
      })
    }
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="ui inverted blue button" onClick={handleClick}>Increment</button>
        <button className="ui inverted blue button" onClick={handleClick1}>Decrement</button>
        <button className="ui inverted blue button" onClick={handleClick2}>Reset</button>
      </div>
    )
  }
}