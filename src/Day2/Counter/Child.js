import React, { Component } from 'react'

export class Child extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter:this.props.count
        }
    }
  render() {
    return (
      <div>
      <h2>{this.state.counter}</h2>
      <button onClick= {()=> this.setState({counter:this.state.counter+1})}>Add</button>
        
      </div>
    )
  }
}

export default Child
