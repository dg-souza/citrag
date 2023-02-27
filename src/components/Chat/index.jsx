import { useState } from 'react'

import {
    Container
} from './style'

const Chat = props => {
    const {
        type,
        style
    } = props

    const [aswern, setAswern] = useState('')
    const [messages, setMessages] = useState([{ nickname: 'Davi', message: 'Teste' }, { nickname: 'Davi', message: 'Teste' }])

    const handleAswern = () => {
        let descarte = messages
        descarte.push({ nickname: 'Davi', message: aswern })
        setMessages([...descarte])
    }

    return (
        <Container style={style}>
            <div className='message-form'>
            {messages.map(item => {
                return (
                    <>
                        <span><b>{ item.nickname }:</b> {item.message}</span>
                    </>
                )
            })}
            </div>
            {type === 'aswern' ?
                <div className='footer'>
                    <input value={aswern} onChange={(e) => setAswern(e.target.value)} type="text" placeholder='Responda aqui...' />
                    <button onClick={() => handleAswern()}>Teste</button>
                </div> :
                <div className='footer'>
                    <input type="text" placeholder='Converse por aqui...' />
                    <button>Teste</button>
                </div>
            }
        </Container>
    )
}

export default Chat