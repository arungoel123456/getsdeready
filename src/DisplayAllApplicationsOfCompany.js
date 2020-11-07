import React from 'react'

export default function DisplayAllApplicationsOfCompany(props)
{
    const list =props.location.state.list
    console.log( "list" ,  list)
    console.log('props' , props)
    const arr = []
    for (var key in list)
    {
        arr.push(key)
        console.log(list[key])
    }
    return (
        <div>
            <h1> Displaying the  Applications </h1>
            <ul>
                {arr.map((key,id) => (
                    <li key={id} > <button className="button-for-question" onClick={() => {window.open( list[key] , '_blank' ) }} > {key} </button> </li>
                ) ) 

                }
            </ul>
        </div>
    )
}