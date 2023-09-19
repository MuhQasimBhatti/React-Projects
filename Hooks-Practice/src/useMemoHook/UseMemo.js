import React, { useState, useMemo } from 'react'

function UseMemo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    // useMemo is used to apply on result e.g here we get true or false
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    return (
        <div>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <div>
                <button onClick={incrementCounterOne}>CounterOne - {counterOne} </button>
            </div>
            <div>
                <button onClick={incrementCounterTwo}>CounterOne - {counterTwo} </button>
            </div>
        </div>
    )
}

export default UseMemo