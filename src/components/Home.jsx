import styled from "styled-components";
import Timer from "./Timer";
import React, { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    min-height: 100vh;
    background: #f8f9fa;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    `;

    const Title = styled.h1`
        font-size: 3rem;
        color: #343a40;
        margin-bottom: 1rem;
    `;

const Home = () => {
    const currDate = new Date();

    const [isRunning, setIsRunning] = useState(true);
    const toggleTimer = () => {setIsRunning(!isRunning)}

    return(
        <Container>              
            <Title>Home</Title>
            <Timer isRunning={isRunning}/>
            <button onClick={toggleTimer}>{isRunning?'Stop':'Start'}</button>
        </Container>
    );
}

export default Home;