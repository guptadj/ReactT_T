// import './App.css';
import Alert from './components/Alert';
// import Abt from './components/Abt';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';


function App() {
  const [modetype, setmodetype] = useState("Enable Dark Mode")
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const Showalert =(message,type)=>{
    setalert({
        message: message,
        type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toogle = () => {
    if(mode==='light'){
      setmode("dark")
      setmodetype("Enable light Mode")
      document.body.style.backgroundColor= "grey"
      Showalert("Dark mode is Enabled", "success")
    }
    else{
      setmode("light")
      setmodetype("Enable Dark Mode")
      document.body.style.backgroundColor= "white"
      Showalert("light mode is Enabled","success")
    }
  }



  return (
    <>
        <Navbar tital="Divyanshu" abttxt="abt_txt" modetype={modetype} mode={mode} toogle={toogle} />
        <Alert alert={alert}/>
        <Textform Showalert={Showalert} heading="Entre Text to Analyse" mode={mode} />
        {/* <Abt/> */}
    </>
  );
}

export default App;
