import React, { useEffect, useRef, useState } from 'react'

function FuncTimer() {
    const intervalRef = useRef()
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook Timer - {timer}
            <br />
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default FuncTimer