import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 1500px;
    min-height: 800px;

    .canvas {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }
`