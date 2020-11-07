import React from 'react'
import {applications} from './JobApplications.js'

export default function JobApplicationShow(props) {


    return (
        <div>
            <ul>
                {
                    Object.keys(applications).map((key, id) => (
                        <li key={id} >
                            <button  className="button-for-topics"  onClick = {() => {
                                props.history.push('/displayAllApplicationsOfCompany' , {list : applications[key] } )
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