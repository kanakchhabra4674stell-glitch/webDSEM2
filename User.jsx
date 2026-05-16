import React from 'react'

function User({name, age}) {
  return (
    <div>
        <h2>Hello,{name}</h2>
        <p>Model: {age}</p>
    </div>
  )
}

export default User