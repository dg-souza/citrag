import {
    Container
} from './style'

import PlayerInfo from '../PlayerInfo'

import { useEffect, useState } from 'react'

const PlayertList = ({ socket }) => {

    const [user, setUser] = useState([])
 
    return(
        <Container>
            <PlayerInfo socket={socket} />
            <div className='line'></div>
        </Container>
    )
}

export default PlayertList