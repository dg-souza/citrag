import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import io from 'socket.io-client'

import {
    Container,
    LoginForm
} from '../style/GlobalStyle'

import CreateRoom from '../components/LoginComponents/CreateRoom'

import { roomActions } from '../reducer/room'

const LoginPage = () => {
    let navigation = useNavigate()
    let dispatch = useDispatch()

    let idRoom = 0
    let descarte = []

    const socket = io.connect('http://localhost:3001');

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const createRooms = async (nick) => {
        socket.emit('createRoom', nick)
        socket.on('giveIdRoom', (data) => { idRoom = data })
        
        await sleep(2000)

        dispatch(roomActions.createRoom({
            idRoom: idRoom,
            usersInfo: { idRoom: idRoom, users: [ { name: nick, points: 0 } ] },
            type: 'creating'
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
            type: 'creating'
        }))

        console.log(descarte)

        navigation(`/room/${roomCode}`)
    }

    return (
        <Container>
            <LoginForm>
                <CreateRoom createRoom={createRooms} enterExistingRoom={enterExistingRoom} />
            </LoginForm>
        </Container>
    )
}

export default LoginPage