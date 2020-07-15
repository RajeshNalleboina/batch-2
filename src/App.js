import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import Logo from './logo.svg';
import Img from './image.svg';
import Wish from "./Wish";
// import Home from "./Home";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import States from "./components/States";
import ClassState from "./components/classState";
import Hooks from "./components/Hooks";
import data from "./data/data.json";
import Resume from "./components/Resume";
import { BrowserRouter,Route,Link  } from 'react-router-dom';

function App() {
  return (
      <div className="App">
      
        {/* <ClassState></ClassState>
        <h1>Using Hooks</h1>
        <Hooks /> */}
          {/* <h1>APSSDC REACTJS</h1>
    <h2>Rajesh APSSDC</h2>
    <Home name="APSSDC"/>
    <Hello>
      
    </Hello>
    <Wish /> */}

    {/* <Greeting name="Rajesh" mail="rajesh.n@apssdc.in">
       <img src={Logo} style={{width:"200px"}}/>
    </Greeting>
    <Greeting name="Varun" mail="varun@gmailcom">
      <p> Hello APSSDC</p>
      <p>Hello Sathyagopal</p>
    </Greeting> */}

    {/* Using welcome component */}
      {/* <h1>We are creating Class Componet & pass the Pops</h1>
      <Welcome name="Kasyap" college="VVIT">
          <p> Hello Student how are you</p>
      </Welcome>
      <Welcome name="DP" college="DNR">
        <p> Hello DP How are you ...!</p>
      </Welcome> */}
        
        {/* states */}
          {/* <States/> */}
          <BrowserRouter>
            <Route exact path="/home"  component={Home}  />
            <Route path="/resume" component={Resume} />
          
          </BrowserRouter>
          {/* <Home /> */}
      </div>
  );
}

let Home=()=>{
  let profile=data.profiles;
  console.log(profile);
  
  return(
    <div className="row justify-content-center">
      {profile.map((value,index)=>(
          <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
            <div className="card">
              <div className="card-body">
                  <img src={Img} alt="Profile Icon" style={{width:"10em"}}  />
                  <h1>{value.basic.name}</h1>

                  <Link to={{pathname:"/resume", profilesData:{i:index}}} className="btn btn-primary">Profile</Link>

              </div>

            </div>
          </div>
        ))
      }
    </div>
  );
}
  




export default App;
