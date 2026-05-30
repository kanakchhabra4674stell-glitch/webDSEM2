import React from 'react'

function Product({name,price}) {
  return (
    <div>
        <h2>Product Name: {name}</h2>
        <p>Product Price: {price}</p>
    </div>
  )
}

export default Product