import React from 'react'

// function Welcome(props) {
  //   return (
  //     <div>
//     <h2>Hello, {props.name}</h2>
//     </div>
//   )
// }

// export default Welcome


function Welcome({name, age}) {
  return (
    <div>
    <h2>Hello, {name}</h2>
    <p>age: {age}</p>
    </div>
  )
}

export default Welcome