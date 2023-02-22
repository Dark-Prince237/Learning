//EventBind.js
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }

      this.clickHandler=this.clickHandler.bind(this)
      
    }

    clickHandler()
    {
        this.setState( {
            message:"Good bye"
        })


    }
  render() {
    return (
      <>
      <div>{this.state.message}</div>
      <div><button onClick={this.clickHandler  }>Click Me </button></div>
      </>
    )
  }
}

export default EventBind