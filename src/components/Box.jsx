import { useState } from 'react'

export default function Box({ color="pink", isActive, toggle }) {
    //  const [isActive, setIsActive] = useState(false)
    //  const toggleisActive = () => setIsActive(!isActive)
     return (
        <div 
        onClick={toggle}
        className="Box" 
        style={{ backgroundColor: isActive ? "red" : color }}> 
        </div>
    )
}