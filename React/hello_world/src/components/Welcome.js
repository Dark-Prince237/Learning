import React, { Component } from 'react'

export class Welcome extends Component {
  
  render() {
    const {name,age}=this.props
    return (
      <div>{name} && {age}</div>
    )
  }
}

export default Welcome