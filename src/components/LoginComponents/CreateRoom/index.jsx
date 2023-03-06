import { useState } from 'react'

import {
    CreateContainer
} from './style'

import PlayerIcon from '../../../assets/playerIcon.png'

const CreateRoom = props => {
    const {
        enterExistingRoom,
        createRoom
    } = props

    const [isCreating, setIsCreating] = useState(true)
    const [nick, setNick] = useState('')
    const [roomCode, setRoomCode] = useState('')

    return (
        <>
            {
                isCreating ?

                    <CreateContainer>
                        <h2>Enter Room</h2>

                        <img src={PlayerIcon} alt="playerIcon" />

                        <input value={nick} onChange={(e) => setNick(e.target.value)} type="text" placeholder='NickName' />

                        <button onClick={() => createRoom(nick)}>ENTER ROOM</button>

                        <span>Already have a room code?</span>
                        <span><b onClick={() => setIsCreating(false)}>enter now.</b></span>
                    </CreateContainer> :

                    <CreateContainer>
                        <h1>Welcome to Citrag</h1>

                        <h2>Enter Room</h2>

                        <input value={nick} onChange={(e) => setNick(e.target.value)} type="text" placeholder='NickName' />

                        <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="text" placeholder='Room Code' />

                        <button onClick={() => enterExistingRoom(roomCode, nick)}>ENTER ROOM</button>

                        <span>Go back and</span>
                        <span><b onClick={() => setIsCreating(true)}>create a new room.</b></span>
                    </CreateContainer>
            }
        </>
    )
}

export default CreateRoom