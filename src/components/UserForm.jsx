import { useState  } from "react"
export default function UserForm() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const updateFirstname = (evt) => {
      setFirstname(evt.target.value)
    }
    const updateLastname = (evt) => {
      //  console.log(evt.target.value)
      setLastname(evt.target.value)
    }
    return (
        <div>
        <label htmlFor="firstname">First name</label>
       <input
        type="text"
        placeholder="First name"
        value={firstname}
        onChange={updateFirstname} />
        <label htmlFor="lastname">Last name</label>
       <input
        type="text"
        placeholder="Last name"
        value={lastname}
        onChange={updateLastname} />
           <button>submit</button>
        </div>
    )
}