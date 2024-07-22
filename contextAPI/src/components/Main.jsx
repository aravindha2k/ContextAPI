import { BottomMain } from "./BottomMain"
import { TopMain } from "./TopMain"

const Main = ({ loggedIn, setLog }) => {

    return (

        <div style={{

            height: "auto",

            border: "1px solid red",

            padding: "15px"

        }}>
            <TopMain />
            <BottomMain loggedIn={loggedIn} setLog={setLog} />
        </div>
    )
}

export { Main }