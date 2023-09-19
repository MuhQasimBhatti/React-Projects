import React, { useState } from 'react'

function UsestatePrev() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>

            {/* when we use count it increments value in a next render not in a current render 
            but in prevCounter we have callback function which re-render component currently and changes the value */}
            {/* <button onClick={() => setCount(
                count + 1,
                console.log(count),
            )}>Increment</button> */}
        </div>
    )
}

export default UsestatePrev