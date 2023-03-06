import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import io from 'socket.io-client'

import {
    Container,
    LoginForm
} from '../style/GlobalStyle'

import CreateRoom from '../components/LoginComponents/CreateRoom'

import { roomActions } from '../reducer/room'

import PlayerIcon from '../assets/playerIcon.png'

const LoginPage = ({ socket }) => {
    let navigation = useNavigate()
    let dispatch = useDispatch()

    const [nick, setNick] = useState('')
    const [anotherNick, setAnotherNick] = useState('')
    const [roomCode, setRoomCode] = useState('')

    let idRoom = 0
    let descarte = []

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const createRooms = async () => {
        socket.emit('createRoom', nick)
        socket.on('giveIdRoom', (data) => { idRoom = data })

        await sleep(2000)

        dispatch(roomActions.createRoom({
            idRoom: idRoom,
            usersInfo: { idRoom: idRoom, users: [{ id: 1, name: nick, points: 0 }] },
            idUser: 1,
            nick: nick
        }))

        navigation(`/room/${idRoom}`)
    }

    const enterExistingRoom = async () => {
        socket.emit('changeRoomUser', Number(roomCode), anotherNick)

        socket.emit('getUsersById', Number(roomCode))

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        socket.on('sendUserById', (data) => { descarte = data })
        await sleep(2000)

        console.log(descarte)

        dispatch(roomActions.createRoom({
            idRoom: Number(roomCode),
            usersInfo: descarte,
            idUser: descarte.users.length,
            nick: anotherNick,
        }))

        navigation(`/room/${roomCode}`)
    }

    return (
        <Container>
            <LoginForm>
                <div className='info-form'>
                    <h2>Create</h2>

                    <img src={PlayerIcon} alt="playerIcon" />

                    <input value={nick} onChange={(e) => setNick(e.target.value)} type="text" placeholder='NickName' />

                    <button className='ic-play' onClick={() => createRooms()}><strong>CREATE ROOM</strong></button>
                </div>

                <div className='or'>
                    <span>OR</span>
                </div>

                <div className='info-room'>
                    <h2>Enter</h2>

                    <img src={PlayerIcon} alt="playerIcon" />

                    <input value={anotherNick} onChange={(e) => setAnotherNick(e.target.value)} type="text" placeholder='NickName' />

                    <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="text" placeholder='Room Code' />

                    <button className='ic-join' onClick={() => enterExistingRoom()}><strong>JOIN ROOM</strong></button>
                </div>
            </LoginForm>
        </Container>
    )
}

export default LoginPage