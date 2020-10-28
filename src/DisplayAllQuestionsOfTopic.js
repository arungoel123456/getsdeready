import React from 'react'
import './DisplayAllQuestionsOfTopic.css'

export default function DisplayAllQuestionsOfTopic(props)
{
    const list =props.location.state.list[0]
    console.log(list)
    console.log('props' , props)
    const arr = []
    for (var key in list)
    {
        arr.push(key)
        console.log(list[key])
    }
    return (
        <div>
            <h1> Displaying the  Questions </h1>
            <ul>
                {arr.map((key,id) => (
                    <li key={id} > <button className="button-for-question" onClick={() => {window.open( list[key] , '_blank' ) }} > {key} </button> </li>
                ) ) 

                }
            </ul>
        </div>
    )

}