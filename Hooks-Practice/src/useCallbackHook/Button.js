import React from 'react'

function Button({eventHandler,children}) {
    console.log(children + ' renders')
  return (
    <div>
        <button onClick={eventHandler}>
            {children}
        </button>
    </div>
  )
}

export default React.memo(Button)