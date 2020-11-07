import React from 'react'
import "./Home.css"
import {courseList , mediumProbs , hardProbs ,oops ,computerNetworks , operatingSystem , dbms  } from "./CourseListCovered.js";
import interviewPhoto from './front-page-photo.jpeg';
import completePackagePhoto from './complete-package-photo.jpg' ;
import buyPhoto from './buy-image.jpg'
import Atlassisn from './Atlassian.jpg'
import amazon from './amazon.jpg'
import duetsche from './deutsche.jpg'
import Expedia from './Expedia.jpg'
import olx from './olx.jpg'
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
                <ul>
                    <li>Live zoom lecture on topic every alternate day</li>
                    <li>Live TA session every alternate day to resolve the queries</li>
                    <li>Preparation for all the other subjects which include OS,OOPS, DBMS , CN </li>
                    <li>Three Mock Interviews after completion with different industry people</li>
                    <li> Referrals from people working in different companies </li>
                    <li>Coding tests</li>
                    <li>Preparation for HR rounds</li>
                    <li> 2 Trial Zoom sessions in the beginning for free. Just go and Register </li>
                </ul>
            </div>
            <hr />
            <div>
                <h2>Mentors From </h2>
                <div>
                    <img src={Atlassisn} style={{width: "150px" , height: "150px" }} />
                    <img src={amazon} style={{width: "150px" , height: "150px" }} />
                    <img src={duetsche} style={{width: "150px" , height: "150px" }} />
                    <img src={Expedia} style={{width: "150px" , height: "150px" }} />
                    <img src={olx} style={{width: "150px" , height: "150px" }} />
                </div>

            </div>
            <br />
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