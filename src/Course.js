import React from 'react'
import {listOfQuestionsWithTopics} from './ArrayQuestions.js'
import './Course.css'

export default function Course(props)
{
    console.log(listOfQuestionsWithTopics)
    return (
        <div>
            <ul>
                {
                    Object.keys(listOfQuestionsWithTopics).map((key, id) => (
                        <li key={id} >
                            <button  className="button-for-topics"  onClick = {() => {
                                props.history.push('/displayAllQuestionsOfTopic' , {list : listOfQuestionsWithTopics[key] } )
                                } } > 
                                    {key} 
                            </button> 
                            
                        </li>
                        
                    ) )
                } 
            </ul>   
        </div>
    )
}

