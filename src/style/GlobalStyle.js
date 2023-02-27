import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 500px;
    min-height: 300px;
    background: #fff;

    border-radius: 5px;
    box-shadow: 0px 1px 4px 0px #000000;

    span {
        font-size: 50px;
        color: #0a5efb;
        margin-bottom: 30px;
    }

    input {
        border: 1px solid #023ba6;
        outline: none;
        padding: 15px;
        font-size: 16px;
        margin-bottom: 20px;
        color: #0a5efb;
        border-radius: 4px;

        &:hover {
            cursor: pointer;
        }

        &:focus {
            cursor: text;
        }
    }

    button {
        border: none;
        padding: 10px;
        font-size: 20px;
        width: 60%;
        background: #0a5efb;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.2s;

        &:hover {
            background: #023ba6;
            box-shadow: 0px 1px 4px 0px #000000;
        }
    }
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

        .chat-forms {
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .line {
                width: 1px;
                background: black;
            }
        }
    }
`