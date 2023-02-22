//functionClick
const FunctionClick = () => {
    function clickHandler(){
        console.log("Button Clicked");
    }
  return (
    <>
    <button onClick={clickHandler}>Click Me</button>
    </>
  )
}

export default FunctionClick