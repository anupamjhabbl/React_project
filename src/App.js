import React from 'react'
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert'
import {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App(props){

    const [darkMode,setDarkMode]=useState(true);

    const [mystyle,setStyle]=useState({
        color:"white",
        backgroundColor:"black"
    });
    
    const [mystyle2,setStyle2]=useState({
       
        backgroundColor:"grey"
    });

    const red=()=>{
        showAlert("Red mode enabled","success");
        document.title="My website/red";
        setDarkMode(false)
            

        setStyle({
            color:"white",
            backgroundColor:"red"
        })
        setStyle2({
                
            backgroundColor:"yellow"
        })
    }
    const blue=()=>{
        showAlert("Blue mode enabled","success");
        document.title="My website/blue";
            

        setStyle({
            color:"#FFD700",
            backgroundColor:"#202A44"
        })
        setStyle2({
                
            backgroundColor:"#FFD700"
        })
    }
    const green=()=>{
        setDarkMode(false);
        document.title="My website/green";
        showAlert("Green mode enabled","success");
            

        setStyle({
            color:"black",
            backgroundColor:"green"
        })
        setStyle2({
                
            backgroundColor:"#00ffff"
        })
    }
    const yellow=()=>{
        setDarkMode(true);
        document.title="My website/yellow";
        showAlert("Yellow mode enabled","success");
            

        setStyle({
            color:"brown",
            backgroundColor:"yellow"
        })
        setStyle2({
                
            backgroundColor:"red"
        })
    }
    const black=()=>{
        setDarkMode(true);
        document.title="My website/dark";
        showAlert("Dark mode enabled","success");
            

        setStyle({
            color:"white",
            backgroundColor:"black"
        })
        setStyle2({
                
            backgroundColor:"grey"
        })
    }
    const white=()=>{
        setDarkMode(false);
        document.title="My website/light";
        showAlert("Light mode enabled","success");
        setStyle({
            color:"black",
            backgroundColor:"white"
        })
        setStyle2({
            backgroundColor:"white"
        })
    }

    const [text,setAlert]=useState(null);

    const showAlert=(message_value,type_value)=>{
        setAlert({
            message:message_value,
            type:type_value
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    
    /*
    const togglemode=()=>{
        if (darkMode){
            setDarkMode(false);
            showAlert("Light mode enabled","success");
            

            setStyle({
                color:"black",
                backgroundColor:"white"
            })
            setStyle2({
                
                backgroundColor:"white"
            })
        }
        else{
            setDarkMode(true);

            showAlert("Dark mode enabled","success");
            

            setStyle({
                color:"white",
                backgroundColor:"black"
            })
            setStyle2({
                
                backgroundColor:"grey"
            })
        }
    }*/

    return (
        <div>
            <Router>
            <Navbar title="textutils" name="anupam" mode={darkMode} mystyle2={mystyle2}  red={red} blue={blue} green={green} yellow={yellow} white={white} black={black} />
            <Alert text={text} mode={darkMode} mystyle={mystyle}/>
            <Body myvalue={props.value} mystyle2={mystyle2} item={
                <h3>Python</h3>
            } mode={darkMode}/>
            
            <Routes>
                <Route exact path="/" element={<Textform heading="Enter the text to analyse" title="TextBox" mystyle2={mystyle2} mystyle={mystyle} mode={darkMode} showAlert={showAlert}/>} />
                <Route exact path="/about" element={<About mystyle={mystyle} mode={darkMode} mystyle2={mystyle2}/>} />
            </Routes>
            </Router>
            
        </div>
        
    );
}

export default App;