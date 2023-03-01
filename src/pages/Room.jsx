import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

import { db } from '../services/connection'
import { collection, CollectionReference, getDocs } from 'firebase/firestore'

import io from 'socket.io-client'

import {
    Container,
    Content
} from '../style/GlobalStyle'

import PlayertList from '../components/PlayerList';
import Canvas from '../components/Canvas';
import Chat from '../components/Chat';

const Room = () => {
    const socket = io.connect('http://localhost:3001');

    let navigate = useNavigate()
    const userCollectionRef = collection(db, 'rooms')

    const [user, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const data = await getDocs(userCollectionRef)
        setUsers(data.docs.map((doc) => ( { ...doc.data(), id: doc.id }) ))
    }

    const deleteUser = () => {
        
    }

    return(
        <>
            <Container>
                <h1 style={{ color: '#fff' }}>Welcome to Citrag</h1>
                <Content>
                    <PlayertList users={ user } />
                    <div className='canvas'>
                        <Canvas />

                        <div className='chat-forms'>
                            <Chat type='aswern' style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}/>
                            <div className='line'></div>
                            <Chat style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} />
                        </div>

                        <button onClick={() => deleteUser()}>Logout</button>
                    </div>
                </Content>
            </Container>            
        </>
    )
}

export default Room