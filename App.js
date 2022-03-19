
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
// import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState("light"); //dark||light
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.background = "#121212";
      document.body.style.color = "white";
      showAlert("Dark mode on", "Success")
    }
    else {
      setMode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";

    }
  }
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  return (
    <>
      <Navbar title="UNIVERSAL" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextFrom heading="Enter your text" mode={mode} />
      </div>

    </>
  );
}

export default App;
