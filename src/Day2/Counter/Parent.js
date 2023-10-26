import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(){
        super()
        this.state = {
            counter : 0 
        }
    }
  render() {
    return (
      <div>

       <Child count = {this.state.counter}/>
        
      </div>
    )
  }
}

export default Parent
