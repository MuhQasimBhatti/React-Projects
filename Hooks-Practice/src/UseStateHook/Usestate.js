import React, { useState } from 'react'

function Usestate() {
    const [ count, setCount ] = useState(0)

    // setCount()
    // useState()
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => (count > 0) ? setCount(count - 1): ''}>Decrement</button>
        </div>
    )
}

export default Usestate