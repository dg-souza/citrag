import {
    Container
} from './style'

import PlayerIcon from '../../assets/playerIcon.png'

const PlayerInfo = props => {
    const {

    } = props

    const players = [{ name: 'Davi', points: 100 }, { name: 'Jão', points: 80 }]

    return (
        <Container>
            {players.map(items => {
                return (
                    <>
                        <div className='item'>
                            <img src={PlayerIcon} alt="playerIcon" />
                            <div className='item-info'>
                                <h1>{items.name}</h1>
                                <span>{items.points}</span>
                            </div>
                        </div>
                        <div className='line'></div>
                    </>
                )
            })}
        </Container>
    )
}

export default PlayerInfo