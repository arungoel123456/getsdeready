import React from 'react'
import {useEffect} from 'react'
import{users} from './Applicants'

export default function Dashboard(props)
{
    const username = localStorage.getItem('username');

    useEffect( () => {
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('password')

        let flag=false
        users.map( (user) => {
            if(user.username === username && user.password === password )
            {
                flag= true
            }
        } )

        if( flag === false )
        {
            props.history.push('/')
        }
        

    }, [] );

    return(
        <div>
            <h1> Hi {username} ! </h1>
        </div>
    )

}