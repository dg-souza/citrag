import {
    Container
} from './style'

import PlayerInfo from '../PlayerInfo'

import { useEffect, useState } from 'react'

const PlayertList = props => {
    const {
        users
    } = props

    const [user, setUser] = useState([])
 
    return(
        <Container>
            <PlayerInfo users={ users } />
            <div className='line'></div>
        </Container>
    )
}

export default PlayertList