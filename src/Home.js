import React from 'react'
import "./Home.css"
import {courseList , mediumProbs , hardProbs ,oops ,computerNetworks , operatingSystem , dbms  } from "./CourseListCovered.js";
import interviewPhoto from './front-page-photo.jpeg';
import completePackagePhoto from './complete-package-photo.jpg' ;
import buyPhoto from './buy-image.jpg'
export default function Home(props)
{

    return (
        <div>
            <div className="upper-photo" >
                
                <img src= {interviewPhoto} className="upper-photo-css" />
                <h1 className="home-page-heading" >Get Interview Ready</h1>
                
            </div>
            <div className="topics-covered" >
                {/* <h1>Topics to be covered</h1> */}
                <div className="topics-image-box" >
                    <img src= {completePackagePhoto}  className="topics-image" />
                </div>
                <div>
                    <ul className="topics-list" >
                        {courseList.map( (topic,id) => (
                            <li key={id} > <h1> {topic} </h1>  </li>
                        ))

                        }
                    </ul>
                </div>
                

            </div>
            <br />
            <hr />
            <div>
                <h1>Course Overview</h1>
                <hr />
                <div>{mediumProbs}</div>
                <div>{operatingSystem.cdks}</div>
            </div>
            <hr />

            <div style={{ height:'350px' , width: '100%' , border: 'solid' }} >
                {/* <h2> Get Started! </h2>
                <button onclick="window.open('http://www.google.com')" > Buy </button> */}
                <button style={{ width: '100%' , height: '100%' }} onClick={() => {
                    props.history.push('/course')
                }}  >
                    <img  src={buyPhoto}  style={{ width: '100%' , height: '100%' }} /> 
                </button>
            </div>

        </div>
    )
}