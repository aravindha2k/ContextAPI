import { BottomMainLeft } from "./BottomMainLeft"
import { BottomMainRight } from "./BottomMainRight"

function BottomMain(){
    return(
        <div style={{
            border:"1px solid blue",
            padding:"10px",
            margin:"10px",

        }}>
        <h3>bot main content</h3>
        <BottomMainLeft />
        <BottomMainRight />
        </div>
    )
}

export {BottomMain}