import React, { useCallback, useState } from 'react'
import Button from './Button'
import Counts from './Counts'
import Title from './Title'

function ParentComponent() {
  const [age,setAge] = useState(20)
  const [salary,setSalary] = useState(50000)

  // useCallback is used to cash a function not a result e.g value or answer it uses function
  const ageHandler = useCallback(() =>{
    setAge(age + 1)
  },[age])

  const salaryHandler = useCallback(() =>{
    setSalary(salary + 1000)
  },[salary])

  return (
    <div>
        <Title />
        <Counts title='age' count={age}/>
        <Button eventHandler={ageHandler}>Increment age</Button>
        <Counts title='Salary' count={salary}/>
        <Button eventHandler={salaryHandler}>Increment salary</Button>
    </div>
  )
}

export default ParentComponent