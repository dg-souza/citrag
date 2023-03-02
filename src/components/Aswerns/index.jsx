import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import {
    Container
} from './style'

const Aswerns = props => {
    const {
        socket
    } = props

    const idUser = useSelector((state) => state.room.idUser)
    const userNick = useSelector((state) => state.room.nick)
    const idRoom = useSelector((state) => state.room.idRoom)
    let users = useSelector((state) => state.room.usersInfo)

    const [message, setMessage] = useState('')
    const [chatMessages, setChatMessages] = useState([])

    const handleAswern = () => {
        
    }

    async function receiveMessages() {
        
    }

    useEffect(() => {
    }, [])

    return (
        <Container>
            <div className='message-form'>
                <span>AAAAAAAAAAAAAAAAAAAAAAAAA</span>
            </div>

            <div className='footer'>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Converse por aqui...' />
                <button onClick={() => handleAswern()}>Enviar mensagem</button>
            </div>
        </Container>
    )
}

export default Aswerns