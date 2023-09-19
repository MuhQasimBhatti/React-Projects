import React, { useEffect, useState } from 'react'

function UseeffectCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
   
    // function doSomething(){
    //     console.log(count)
    // }
    useEffect(() => {
        
        const interval = setInterval(tick, 1000)
        // doSomething()

        return () => {
            console.log('Component Unmounted')
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            {count}
        </div>
    )
}

export default UseeffectCounter