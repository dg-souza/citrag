import styled from "styled-components";

import IconPlay from '../assets/ic_play.png'

import IconJoin from '../assets/ic_join.png'

import IconNick from '../assets/ic_nick.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;  //enquadra no navegador
    width: 100vw;

    @media(max-width: 1366px){
        height: 100vh;
        width: 100%;

        h1 {
            font-size: 24px
        }
    }
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: row;
    background: #fff;
    align-items: center;
    justify-content: center;
    width: 1200px;
    height: 600px;
    border-radius: 5px;

    .info-form, .info-room {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        transition: 0.2s;

        input {
            border: 1px solid #0244bd;
            font-size: 14px;
            width: 200px;
            padding: 15px;
            border-radius: 4px;
            outline: none;
            color: #0244bd;
            margin-top: 20px;
        }

        h2 {
            color: #0244bd;
        }

        button {
            border: none;
            background-color: #1351c2;
            color: #fff;
            font-size: 16px;
            margin-top: 20px;
            width: 50%;
            height: 50px;
            border-radius: 34px;
            transition: 0.2s;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
    
            &:hover {
                cursor: pointer;
                background: #003391;
                box-shadow: 0px 1px 4px 0px #000000;
            }
        }

        .ic-play, .ic-join {
            &:before {
                margin: 0 40px 0 15px;

                content: '';
                width: 40px;
                height: 40px;
                background-size: contain;
            }
        }

        .ic-play {
            &:before {
                background-image: url('${IconPlay}');   
            }
        }

        .ic-join {
            &:before {
                background-image: url('${IconJoin}');
            }
        }
    }

    .or {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            padding: 15px;
            border-radius: 50%;
            border: 2px solid #c4c5c6;
            margin: 20px 0;
            color: #868d96;
            font-weight: bold;
        }

        &:before {
            content: '';
            width: 2px;
            height: 180px;
            background-color: #c4c5c6;
        }

        &:after {
            content: '';
            width: 2px;
            height: 180px;
            background-color: #c4c5c6;
        }
    }

    .input-form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
    }

    @media(max-width: 1366px){
        width: 1000px;
        height: 500px;
    }

    @media(max-width: 1220px) {
        .info-room {
            display: none;
        }

        .or {
            display: none;
        }

        max-width: 400px;

        .info-form {
            .ic_play {
                &:before {
                    content: 'aaaaaaaaa';
                    width: 100px;
                    height: 100px;
                    background-repeat: no-repeat;
                }
            }
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
    min-width: 1500px;  /* enquadra no navegador
    min-height: 800px;  */

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

    @media(max-width: 1366px){
        max-width: 1366px;
        justify-content:center;

        .canvas{
            margin-left: 25px;

            .footer {
                width: auto;
                margin-bottom: 0;

                button {
                    height: 40px;
                    font-size: 12px;
                }
            }
        }
    }
`