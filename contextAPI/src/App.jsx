import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import AuthContext from './contexts/AuthContext';

function App() {
  // const[loggedIn, setLog] = useState(true);
  // console.log(loggedIn);

  const {loggedIn} = useContext(AuthContext)
  // console.log(val);

  return(
    <>
    <h3 style={{
            color:"violet"
        }}>App status:{loggedIn.toString()}</h3>
    <Navbar/>
    <Main />
    <Footer />
    
    </>
  )
  
}

export default App
