import { useState } from 'react'
import {v4 as uuid} from 'uuid'
//import { ShoppingListForm } from './App'
import ValidatedShoppingListForm from './ValidatedList'

export default function ShoppingList () {
    const [items, setItems] = useState([
        {id: uuid(), product: "Banana", quantity: 8},
        {id: uuid(), product: "apple", quantity: 2},
        {id: uuid(), product: "kiwi", quantity: 5},
    ])
    const addItem = (item) => {
        if (!item.product) {
            return;
        }
        setItems(currItems => {
            return [...currItems,
                {...item, id: uuid() }]
        })
    }
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
            {items.map((i) => (
                <li key={i.id}>
                   {i.product} - {i.quantity}
                </li>
            ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem} />
        </div>
    )
}