import React from 'react'
import { UserContext, AgeContext } from '../App'
function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <AgeContext.Consumer>
                                {
                                    age => {
                                        return <div>User Context Value is {user} whose age is {age}</div>
                                    }
                                }
                            </AgeContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC