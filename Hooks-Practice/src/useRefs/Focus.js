import React, { useEffect, useRef } from 'react'

function Focus() {
    const inputRef = useRef(null)
    useEffect(() => {
        // focus the input element
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default Focus