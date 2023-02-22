// Greet.js
const Greet = props => {
  const {name,age}=props
  return (
    <>
     <div>{name} && {age}</div>
    </>
   
  )
}

export default Greet