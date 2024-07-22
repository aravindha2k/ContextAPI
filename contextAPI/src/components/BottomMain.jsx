import { BottomMainLeft } from "./BottomMainLeft"
import { BottomMainRight } from "./BottomMainRight"

function BottomMain({loggedIn, setLog}){
    return(
        <div style={{
            border:"1px solid blue",
            padding:"10px",
            margin:"10px",

        }}>
        <h3>bot main content</h3>
        <BottomMainLeft />
        <BottomMainRight loggedIn={loggedIn} setLog={setLog}/>
        </div>
    )
}

export {BottomMain}