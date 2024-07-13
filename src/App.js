import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() {
  const [mode, setmode] = useState('light');//whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#2D5987'
      showalert("dark mode is enabled", "success ")

        ;
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode is enabled", "success ")
    }
  };
  return (
    <>
    <Router>
      <Navbar tittle="TextEditor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
        <Route exact path="/">
        <TextForm showalert={showalert} heading="Enter your text here" mode={mode} />
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
      </Switch>
      </div>
      </Router>

        
      


    </>
  );
}

export default App;
