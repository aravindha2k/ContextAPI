function BottomMainRight({loggedIn, setLog}) {
    // console.log(loggedIn+" Success");


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