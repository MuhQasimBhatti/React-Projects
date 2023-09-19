import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { UserContext, AgeContext } from '../App'

function ComponentB() {
    const user = useContext(UserContext)
    const age = useContext(AgeContext)

    return (
        <div>
            {user} - {age}
            <ComponentC />
        </div>
    )
}

export default ComponentB