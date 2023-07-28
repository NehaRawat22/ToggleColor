import React ,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const[mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-light');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add("bg-"+cls);
    if(cls === 'secondary'){   
      setMode('white');
    }
    else if(cls=== 'light'){
      setMode('light');
    }
    else{
      setMode('light');
    }
  }
  return (
    <div className="App">
      <Navbar title="ToggleColor" mode={mode} aboutText='About' toggleMode={toggleMode}/>
      <h1 style={{textAlign:"center", marginTop:"292px"}}>Hello LetsUpgrade!</h1>
    </div>
  );
}

export default App;
