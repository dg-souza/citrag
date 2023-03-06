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

    const [aswern, setAswern] = useState('')
    const [aswernsMessages, setAswernsMessages] = useState([])

    const handleAswern = () => {
        const objAswenr = { idRoom: idRoom, aswern: aswern.toLocaleLowerCase(), idUser: idUser, nick: userNick }

        socket.emit('sendAswern', objAswenr)
    }

    async function receiveAswerns() {
        await socket.on('receiveMessageUpdate', (data) => { setAswernsMessages(data) })
        console.log(aswernsMessages)
    }

    useEffect(() => {
        setAswernsMessages(users)
        receiveAswerns()
    }, [])

    return (
        <Container>
            <div className='message-form'>
                {
                    aswernsMessages.aswerns !== undefined ?

                    aswernsMessages.aswerns.map(item => {
                        return(
                            <>
                                <span><b>{ item.user }: </b>{ item.aswern }</span>
                            </>
                        )
                    })

                    :

                    <></>
                }
            </div>

            <div className='footer'>
                <input value={aswern} onChange={(e) => setAswern(e.target.value)} type="text" placeholder='Converse por aqui...' />
                <button onClick={() => handleAswern()}>Enviar mensagem</button>
            </div>
        </Container>
    )
}

export default Aswerns