// Message.js

import { Component } from "react";

class Message extends Component
{

    constructor(){
        super()
        this.state={
            message:"Welcome Visitor"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you"
        })
    }
    changeMessage2(){
        this.setState({
            message:"Like you"
        })
    }
    render()
    {
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>+</button>
            <button onClick={()=>this.changeMessage2()}>-</button>
            </>
        )
    }
}

export default Message