import React, { useEffect, useState } from 'react'
import axios from "axios";
function DataFetching() {
  const [posts, setPosts] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromButtonClick])

  // If useEffect [] is not present as a dependencies then useEffect always renders

  // If useEffect method contains empty [] as a dependencies then it will always
  //  renders when a component re-renders like when we made changes in Component file etc.

  // If useEffect method contains dependencies as [count] etc then it will re-renders when count updates

  // return() method returns when a component removed or add. Also it must be render first time.


  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>Click</button>
      <div>{posts.title}</div>
      {/* <ul>
          {
            posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))
          }
        </ul>  */}
    </div>
  )
}

export default DataFetching