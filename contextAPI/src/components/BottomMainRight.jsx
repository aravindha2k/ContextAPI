import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

function BottomMainRight() {
    // console.log(loggedIn+" Success");

    const {loggedIn, setLog} = useContext(AuthContext)
    return (
        <>
        <h3>BottomMainright content</h3>

        <h3 style={{
            color:"violet"
        }}
        >status:{`${loggedIn}`}</h3>

        <button onClick={()=>{
          setLog((prev)=> !prev)
        }}
        >Toggle-Login</button>
        </>

    )
}

export { BottomMainRight }