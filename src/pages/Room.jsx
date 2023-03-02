import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import io from 'socket.io-client'

import {
    Container,
    Content
} from '../style/GlobalStyle'

import PlayertList from '../components/PlayerList';
import Canvas from '../components/Canvas';
import Chat from '../components/Chat';
import Aswerns from '../components/Aswerns';

const Room = ({ socket }) => {
    const idRoom = useSelector((state) => state.room.idRoom)
    const idUser = useSelector((state) => state.room.idUser)

    let navigate = useNavigate()

    const handleDelete = () => {
        socket.emit('deleteRoomUser', idRoom, idUser)

        navigate('/')
    }

    const onUserDelete = async () => {
        await socket.on('changeAfterDeleting', (data) => console.log(data))
    }

    useEffect(() => {
        onUserDelete()
    }, [])

    return(
        <>
            <Container>
                <h1 style={{ color: '#fff' }}>Welcome to Citrag</h1>
                <Content>
                    <PlayertList socket={socket}/>
                    <div className='canvas'>
                        <Canvas />

                        <div className='chat-forms'>
                            <Aswerns socket={socket} />

                            <Chat socket={socket} type='aswern' style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}/>
                        </div>

                        <button onClick={() => handleDelete()}>Logout</button>
                    </div>
                </Content>
            </Container>            
        </>
    )
}

export default Room