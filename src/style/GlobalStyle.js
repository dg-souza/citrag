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
    flex-direction: row;

    .info-form {
        display: flex;
        min-width: 600px;
        min-height: 450px;
        background: #023ba6;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        transition: 0.2s;
    }

    .input-form {
        display: flex;
        background: #fff;
        min-width: 300px;
        min-height: 450px;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
    }

    @media(max-width: 920px) {
        .info-form {
            display: none;
        }

        .input-form {
            min-width: 400px;
        }
    }

    @media(max-width: 430px) {
        .input-form {
            min-width: 300px;
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