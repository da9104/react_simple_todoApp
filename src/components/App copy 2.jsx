import { useState } from 'react'
import './App.css'
import axios from 'axios'
import ShoppingList from './components/ShoppingList'
import ValidatedShoppingListForm from './components/ValidatedList'

export function ShoppingListForm({addItem}) {
  const [formData, setFormData] = useState({product: "", quantity: 0})
  const handleChange = (evt) => {
    setFormData(currData => {
      return {
          ...currData,
          [evt.target.name]: evt.target.value
      }
    })
  }
  const handdleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    addItem(formData)
    setFormData({product: "", quantity: 0})
  }
  return (
    <form onSubmit={handdleSubmit}>
     <label htmlFor="product">Product name</label>
      <input 
       type="text"
       placeholder="product name" 
       name="product"
       id="product"
       onChange={handleChange}
       value={formData.product}
       />
      <label htmlFor="quantity">Quantity</label>

      <input 
       type="number"
       placeholder="1" 
       name="quantity"
       id="quantity"
       onChange={handleChange}
       value={formData.quantity}
       />
       <button>Add Item</button>

       <h5>{formData.product} quantity: {formData.quantity}</h5>
    </form>
  )
}


function App() {
  return (
      <>
      {/* <StarWars /> */}
      <ShoppingList />
      </>
  )
}

export default App

