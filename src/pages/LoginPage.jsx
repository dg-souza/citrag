import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import io from 'socket.io-client'

import {
    Container,
    LoginForm
} from '../style/GlobalStyle'

import CreateRoom from '../components/LoginComponents/CreateRoom'

import { roomActions } from '../reducer/room'

const LoginPage = ({ socket }) => {
    let navigation = useNavigate()
    let dispatch = useDispatch()

    let idRoom = 0
    let descarte = []

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const createRooms = async (nick) => {
        socket.emit('createRoom', nick)
        socket.on('giveIdRoom', (data) => { idRoom = data })
        
        await sleep(2000)

        dispatch(roomActions.createRoom({
            idRoom: idRoom,
            usersInfo: { idRoom: idRoom, users: [ { id: 1, name: nick, points: 0 } ] },
            idUser: 1,
            nick: nick
        }))

        navigation(`/room/${idRoom}`)
    }

    const enterExistingRoom = async (roomCode, nick) => {
        socket.emit('changeRoomUser', Number(roomCode), nick)
        
        socket.emit('getUsersById', Number(roomCode))

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        socket.on('sendUserById', (data) =>  { descarte = data} )
        await sleep(2000)

        console.log(descarte)

        dispatch(roomActions.createRoom({
            idRoom: Number(roomCode),
            usersInfo: descarte,
            idUser: descarte.users.length,
            nick: nick,
        }))

        navigation(`/room/${roomCode}`)
    }

    return (
        <Container>
            <LoginForm>
                <div className='info-form'>
                    <h1>Welcome To Citrag</h1>
                </div>

                <div className='input-form'>
                    <CreateRoom createRoom={createRooms} enterExistingRoom={enterExistingRoom} />
                </div>
            </LoginForm>
        </Container>
    )
}

export default LoginPage