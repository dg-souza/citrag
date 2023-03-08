import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 100%;
    background: #fff;

    border-radius: 5px;
    box-shadow: 0px 1px 4px 0px #000000;

    @media(max-width:1366px){
        width: 200px;
        height: 200px;

        overflow-y: scroll;
    }
`