import { useEffect, useState } from 'react'

import {
    Container
} from './style'

import PlayerIcon from '../../assets/playerIcon.png'

const PlayerInfo = props => {
    const {
        users
    } = props

    return (
        <Container>
            {
                users.map(item => {
                    return (
                        <>
                            {
                                item.users.map(user => {
                                    return (
                                        <>
                                            <div className='item'>
                                                <img src={PlayerIcon} alt="playerIcon" />
                                                <div className='item-info'>
                                                    <span>{user.name}</span>
                                                    <span>{user.points}</span>
                                                </div>
                                            </div>
                                            <div className='line'></div>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </Container>
    )
}

export default PlayerInfo