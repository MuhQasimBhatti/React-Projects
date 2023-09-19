import React from 'react'

function Counts({ title, count }) {
    console.log(title + ' count render')
    return (
        <div>
            {title} count - {count}
        </div>
    )
}

export default React.memo(Counts)