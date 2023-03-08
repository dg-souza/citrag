import styled from "styled-components";

export const Container = styled.div` 
    background: #fff;
    padding: 5px;
    border: solid 1px #000;
    border-radius: 5px;
    margin: 5px 0 5px 0;

    .message-form {
        display: flex;
        flex-direction: column;
        background: #fff;
        min-width: 450px;
        max-height: 150px;
        min-height: 150px;
        padding: 0 15px;
        overflow: scroll;
        overflow-x: hidden;

        border: solid 1px #000;
    }

    span {
        padding: 10px;
    }

    .footer {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        width: 100%;

        input {
            border: 1px solid #023ba6;
            outline: none;
            padding: 8px;
            font-size: 12px;
            color: #0a5efb;
            border-radius: 4px;
            width: 80%;
    
            &:hover {
                cursor: pointer;
            }
    
            &:focus {
                cursor: text;
            }
        }

        button {
            border: none;
            padding: 8px;
            width: 20%;
            margin-bottom: 20px;
            margin-left: 10px;
            font-size: 15px;
            background: #0a5efb;
            color: #fff;
            cursor: pointer;
            border-radius: 5px;
            transition: 0.2s;

            &:hover {
                background: #023ba6;
            }
        }
    }

    @media(max-width: 1366px){

        .message-form{
            max-height: 160px;
            min-height: 160px;
        }

        .footer {

            button{
                margin-bottom: 0;
            }
        }
    }
`