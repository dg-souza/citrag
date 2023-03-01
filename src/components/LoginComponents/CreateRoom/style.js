import styled from "styled-components";

export const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: 0.2s;

    h1 {
        color: #0244bd;
        font-weight: normal;
    }

    input {
        border: 1px solid #0244bd;
        font-size: 14px;
        width: 70%;
        padding: 15px;
        border-radius: 4px;
        outline: none;
        color: #0244bd;
        margin-bottom: 10px;
    }

    span {
        font-size: 15px;
        color: #0244bd;

        b {
            cursor: pointer;
        }
    }

    button {
        border: none;
        background: #0244bd;
        color: #fff;
        font-size: 16px;
        padding: 10px;
        margin-bottom: 10px;
        width: 80%;
        border-radius: 4px;
        transition: 0.2s;

        &:hover {
            cursor: pointer;
            background: #003391;
            box-shadow: 0px 1px 4px 0px #000000;
        }
    }
`