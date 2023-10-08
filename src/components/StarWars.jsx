import { useState } from 'react'
import axios from 'axios'

// const req = new XMLHttpRequest()

// req.onload = function() {
//   console.log("It loaded.")
//   const data = JSON.parse(this.responseText)
//   conosle.log(data)  
// }
// req.open("GET", "https://swapi.dev/api/people/1/")
// req.send()


//  fetch('https://swapi.dev/api/people/1/')
//  .then(res=>{ 
//   // console.log(res)
//   return res.json()
//   })
//   .then((data) => {
//      console.log(data)
//   })
//  .catch(e=> console.log("error", e))

// const starWarsAPI = async () => {
//   try {
//     const res = await fetch('https://swapi.dev/api/people/1/')
//     const data = await res.json()
//     console.log(data)
//   } catch (e) {
//     console.log("error", e)
//   }
// }
// starWarsAPI()

function App() {
  // axios.get('https://swapi.dev/api/people/1/')
  // .then(res => console.log(res.data))
  // .catch(e => console.log("Error", e))

const handdleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    addName()
  }
  

const getstarWarsPerson = document.querySelector("#starWars")

const getStarWars = async (id) => {
 try{
   // const config = { headers: {Accept: 'application/json' }}
   const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
   const result = res.data.name
   return result
 }
 catch(e) {
  console.log(e)
 }
}


const addName = async () => {
  const getName = await getStarWars(5)
  const newLI = document.createElement('LI')
  console.log(getName)
  newLI.append(getName)
  getstarWarsPerson.append(getName)
}

  return (
      <>
      <button onClick={handdleSubmit}> click </button>
      <ul id="starWars"></ul>
      </>
  )
}

export default App

