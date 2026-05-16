import React from 'react'
import { useState } from 'react'

function Todo() {
    const [items,setItems]=useState(["Item1","Item2"])

    function addItem(){
        setItems([...items, "New Item"])
    }
    function removeItem(){
        setItems(items.length-1)
    }

  return (
    <div>
        <h2>{items}</h2>
        <button onClick={addItem}>Add Item</button>
        <button>Remove Item</button>
    </div>
  )
}

export default Todo