import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  const[loggedIn, setLog] = useState(true);
  // console.log(loggedIn);

  return(
    <>
    <h3 style={{
            color:"violet"
        }}>App status:{loggedIn.toString()}</h3>
    <Navbar/>
    <Main loggedIn = {loggedIn} setLog= {setLog}/>
    <Footer />
    </>
  )
  
}

export default App
