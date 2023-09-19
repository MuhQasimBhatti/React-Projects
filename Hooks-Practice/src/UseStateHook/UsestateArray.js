import React, { useState } from 'react'

function UsestateArray() {

    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    console.log(items)
    return (
        <div>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>Value:{item.value}</li>
                    ))
                    
                }
                
            </ul>
        </div>
    )
}

export default UsestateArray