import { Input } from "postcss";
import { useState  } from "react";

export default function SignUpForm() {
    const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""})

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value
       // console.log(changedField, newValue)
       setFormData(currData => {
        currData[changedField] = newValue
        return { ...currData}
       })
    } 

    const handleSubmit = () => {
        console.log(fistName, lastName)
    }
    return (
        <div>
            <input type="text"
            placeholder="first name"
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange}
            id="firstname"    
            />
            <input type="text"
            placeholder="last name"
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange}
            id="lastname"    
            />
            <input type="password"
            placeholder="password"
            name="password"
            value={formData.password} 
            onChange={handleChange}
            id="password"    
            />
            <button>Submit</button>
        </div>
    )
}

