import {
    Container
} from './style'

import PlayerInfo from '../PlayerInfo'

const PlayertList = () => {
    return(
        <Container>
            <PlayerInfo />
            <div className='line'></div>
        </Container>
    )
}

export default PlayertList