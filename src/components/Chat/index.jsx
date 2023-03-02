import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import {
    Container
} from './style'

const Chat = props => {
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
        const messageObj = { idUser: idUser, nick: userNick, idRoom: Number(idRoom), message: message }
        socket.emit('sendMessage', messageObj)
        console.log(messageObj)
    }

    async function receiveMessages() {
        await socket.on('receiveMessageUpdate', (data) => { setChatMessages(data) })
        console.log(chatMessages)
    }

    useEffect(() => {
        setChatMessages(users)
        receiveMessages()
    }, [])

    return (
        <Container>
            <div className='message-form'>
                {
                    chatMessages.messages !== undefined ?

                    chatMessages.messages.map(item => {
                        return(
                            <>
                                <span><b>{ item.user }: </b>{ item.message }</span>
                            </>
                        )
                    })

                    :

                    <></>
                }
            </div>

            <div className='footer'>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Converse por aqui...' />
                <button onClick={() => handleAswern()}>Enviar mensagem</button>
            </div>
        </Container>
    )
}

export default Chat