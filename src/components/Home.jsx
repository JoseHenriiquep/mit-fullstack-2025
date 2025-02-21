import Timer from "./Timer";
import React, { useState } from "react";

const Home = () => {
    const [isRunning, setIsRunning] = useState(true);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const toggleTimer = () => {setIsRunning(!setIsRunning)}

    return(
        <>              
            <h1>Home</h1>
            <Timer isRunning={isRunning}/>
            <button onClick={toggleTimer}>{isRunning?'Stop':'Start'}</button>
        </>
    );
}

export default Home;