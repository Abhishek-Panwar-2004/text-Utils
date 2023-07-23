import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light")
  const [label, setLabel] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null) 


  const togSwitch = () => {
    if (mode === "light") {
      setMode("dark")
      setLabel("Enable Light Mode")
      setAlert("Dark mode has been enabled")
      document.body.style.backgroundColor="#212529"
    } else {
      setMode("light")
      setLabel("Enable Dark Mode")
      document.body.style.backgroundColor="white"
      setAlert("Light mode has been enabled")
    }
  }

  return (
    <>
      <Navbar logo="text Utils" about="About Us" mode={mode} toggleSwitch={togSwitch} label={label} />
      <Alert alert={alert}/>
      <div className="container">
        <Form heading="Enter here" mode={mode}/>
      </div>
      <About mode={mode}/>
    </>
  );
}

export default App;
