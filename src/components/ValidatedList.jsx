import { isValidElement, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ValidatedShoppingListForm({addItem}) {
  const [formData, setFormData] = useState({product: "", quantity: 0})
  const [productIsValid, setProductIsValid] = useState(false)
  const {
     register, 
     handleSubmit, 
     formState: { errors },
    } = useForm({ mode: "onChange"})

  const handleRegistration = (formData) => {
    console.log("form submitted")
    console.log(formData)
    addItem(formData)
    setFormData({product: "", quantity: 0})
  }
 const  handleError = (errors) => {}

  const registerOptions = {
    product: {required: "product cannot be blank"},
    quantity: {
        required: "quantity required",
        min: {
            value: 0,
            message: 'quantity must be greater than 0'
        },
        max: {
            value: 20,
            message: 'quantity must be less than 20'
        },
},
  }

  const validate = (product) => {
    if(product.length === 0) {
        setProductIsValid(false)
    }else{
        setProductIsValid(true)
    }
  }
  const handleChange = (evt) => {
    if (evt.target.name === "product"){
        validate(evt.target.value)
    }
    setFormData(currData => {
      return {
          ...currData,
          [evt.target.name]: evt.target.value
      }
    })
  }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (productIsValid) {
//         console.log("submitted")
//         addItem(formData)
//         setFormData({product: "", quantity: 0})
//     }
//   }
  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
     <label htmlFor="product">Product name</label>
      <input 
       type="text"
       placeholder="name" 
       name="product"
       id="product"
    //    onChange={handleChange}
    //    value={formData.product}
       {...register("product", registerOptions.product)}
       />
      <label htmlFor="quantity">Quantity</label>
      <input 
       type="number"
       placeholder="1" 
       name="quantity"
       id="quantity"
      //  onChange={handleChange}
    //    value={formData.quantity}
        {...register("quantity", registerOptions.quantity)}
       />
       <button>Add Item</button>

        <small style={{ color: 'red'}}> {errors?.name && errors.name.message }</small>
        <small style={{ color: 'red'}}> {errors?.quantity && errors.quantity.message }</small>
       {/* <h5>{formData.product} quantity: {formData.quantity}</h5> */}
       {/* {!productIsValid && (<p style={{ color: 'red' }}>Product is empty.</p>)} */}
    </form>
  )
}
