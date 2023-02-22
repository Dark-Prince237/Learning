import {Component} from "react"
class Counter extends Component{
  constructor(){
    super()
    this.state=
    {
      count:0
    }
  }

    Increment()
    {
      // this.setState({     
      //   count:this.state.count+1
      // })

      this.setState((prevState,props)=>({
        count:prevState.count+props.addValue
      }))
      
      console.log(this.state.count);

    }

    FiveIncrement()
    {
      this.Increment()
      this.Increment()

      this.Increment()

      this.Increment()
      this.Increment()
    }
  render()
  {
    return(
      <>
        <div>Counter-{this.state.count}</div>
        <button onClick={()=>this.FiveIncrement()}>Increment</button>
      </>
    )
  }
}


export default Counter