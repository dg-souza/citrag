import styled from "styled-components";

export const Container = styled.div`  
    .message-form {
        display: flex;
        flex-direction: column;
        background: #fff;
        min-width: 500px;
        max-height: 150px;
        min-height: 150px;
        padding: 0 15px;
        overflow: scroll;
        overflow-x: hidden;
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
            margin-bottom: 20px;
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
`