import React from 'react'
import {users} from './Applicants'

export default function Signin(props)
{

    

    function onSignIn(event)
    {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        // console.log(username , password)
        // console.log(users)

        users.map( (user) => {
            if(user.username === username && user.password === password )
            {
                localStorage.setItem('username' , username)
                localStorage.setItem('password' , password)
                props.history.push('/dashboard')
            }
        } )
        

    }

    return (
        <div>
            <form onSubmit={onSignIn} >
                <div>
                    <label htmlFor="username" > Username </label>
                    <input id="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password" > Password </label>
                    <input id="password" type="password" />
                </div>
                <div>
                    <button type="submit" >Sign In</button>
                </div>
            </form>
        </div>
    );

}