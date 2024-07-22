import { BottomMain } from "./BottomMain"
import { TopMain } from "./TopMain"

const Main = () => {

    return (

        <div style={{

            height: "auto",

            border: "1px solid red",

            padding: "15px"

        }}>
            <TopMain />
            <BottomMain  />
        </div>
    )
}

export { Main }