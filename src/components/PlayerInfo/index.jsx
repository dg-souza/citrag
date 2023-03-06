import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import io from 'socket.io-client'

import {
    Container
} from './style'

import PlayerIcon from '../../assets/playerIcon.png'

const PlayerInfo = ({ socket }) => {

    let users = useSelector((state) => state.room.usersInfo)

    const [allUsers, setAllUsers] = useState([])

    function configureSocket() {
        socket.on('receiveMessageUpdate', (data) => { setAllUsers(data) })
        console.log(allUsers)
    }

    // const getUsers = async () => {
    //     let descarte = []

    //     socket.emit('getUsersById', roomCode)

    //     function sleep(ms) {
    //         return new Promise(resolve => setTimeout(resolve, ms));
    //     }

    //     socket.on('sendUserById', (data) =>  { descarte = data} )
    //     await sleep(2000)
    //     console.log(descarte)

    //     descarte = allUsers
    //     setAllUsers(descarte)

    //     console.log('adsdasdasdasdasdasd')
    // }

    useEffect(() => {
        console.log(users)
        setAllUsers(users)
        configureSocket()
    }, [])

    return (
        <Container>
            {
                allUsers.users !== undefined

                    ?

                    allUsers.users.map(item => {
                        return (
                            <>
                                <div className='item'>
                                    <img src={PlayerIcon} alt="playerIcon" />
                                    <div className='item-info'>
                                        <span>{item.name}</span>
                                        <span>{item.points}</span>
                                    </div>
                                </div>
                                <div className='line'></div>
                            </>
                        )
                    })

                    :

                    <></>


                //     users.map(item => {
                //         return (
                // <>
                //     {
                //         item.users.map(user => {
                //             return (
                //                 <>
                //                     <div className='item'
                //                         <img src={PlayerIcon} alt="playerIcon" />
                //                         <div className='item-info'>
                //                             <span>{user.name}</span>
                //                             <span>{user.points}</span>
                //                         </div>
                //                     </div>
                //                     <div className='line'></div>
                //                 </>
                //             )
                //         })
                //     }
                // </>
                // )
                //     })
            }
        </Container>
    )
}

export default PlayerInfo