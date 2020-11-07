import React , {useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router , Route , NavLink , Switch , Link
} from "react-router-dom"
import Course from "./Course";
import Home from "./Home"
import ContactUs from './ContactUs';
import DisplayAllQuestionsOfTopic from './DisplayAllQuestionsOfTopic';
import Team from './Team';
import JobApplicationShow from './JobApplicationsShow';
import DisplayAllApplicationsOfCompany from './DisplayAllApplicationsOfCompany';
import Signin from './Signin';
import dashboard from './Dashboard';

function App() {

  useEffect(() => {
    document.title = "getsdeready"
  }, [])

  const signedIn = false
  

  return (
    <div className="App">
      <Router>
        <div>
          <div className ="header" >
            <NavLink to="/" exact className="home-link" style= {{width: "10%" }} >
              Home
            </NavLink>
            <div className="white-space" style={{width: '56%' }} ></div>
            <div className="right-links" >
              <NavLink to="/course" >
                Course
              </NavLink>
          
              <NavLink to="/contactUs" >
                Contact us
              </NavLink>
              <NavLink to="/team" >
                Team
              </NavLink>
              <NavLink to="/jobApplicationsShow" >
                Job Applications
              </NavLink>
              {

              }
              <NavLink to="/signin" >
                SignIn
              </NavLink>
            
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDr70dUWi3i4Ny41KIBO2tLuBIPXSs3LIZ53XQFX7OzG2RCw/viewform?usp=sf_link" > Register </a>
              {/* <td onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdDr70dUWi3i4Ny41KIBO2tLuBIPXSs3LIZ53XQFX7OzG2RCw/viewform?usp=sf_link" , "_blank") } >Buy</td> */}
            </div>
          </div>
        </div>
        <div className="main-content" >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/course" component = {Course}  />
            <Route path="/contactUs" component = {ContactUs} />
            <Route path="/displayAllQuestionsOfTopic" component = {DisplayAllQuestionsOfTopic} />
            <Route path="/team" component = {Team}  />
            <Route path="/jobApplicationsShow" component = {JobApplicationShow}  />
            <Route path="/displayAllApplicationsOfCompany" component = {DisplayAllApplicationsOfCompany} />
            <Route path="/signin" component={Signin} />
            <Route path="/dashboard" component={dashboard} />
          </Switch>
        </div>
        <div id="footer" >
          <div>
            <Link to = "/contactUs" >Contact Us </Link>
            <Link to = "/" > Terms And Conditions </Link>
            <Link to = "/" > Privacy Policy </Link>
          </div>
          
          
        </div>
      </Router>
      
    </div>
  );
}

export default App;
