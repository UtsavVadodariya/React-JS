import React, { Component } from 'react'

export default class Classcom extends Component {

 constructor(props){
    super(props)

    this.state = {count : 0};
 }

  increament = ()=>{
    this.setState({count:this.state.count +1})
  }

  render() {
    return (
      <div>
       <h2> Classcom</h2>
      <h1>{this.state.count }</h1>
      <button onClick={this.increament}>Click</button>
      </div>
      )
}
}
