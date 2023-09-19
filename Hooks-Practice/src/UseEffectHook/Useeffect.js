import React, { useEffect, useState } from 'react'
function Useeffect() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('') 

  useEffect(()=>{
    console.log('useEffect - Updating document title')
    document.title=`You click ${count} times`
  },[count])
  return (
    <div>
      <p>Here is UseEffect Hook, Click {count} times</p>
      <input type="text" value={name} onChange={e=> setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Useeffect