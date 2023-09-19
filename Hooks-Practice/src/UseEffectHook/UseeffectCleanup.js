import React, { useState } from 'react'
import UseeffectMouse from './UseeffectMouse'

function UseeffectCleanup() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <UseeffectMouse />  }
        </div>
    )
}

export default UseeffectCleanup