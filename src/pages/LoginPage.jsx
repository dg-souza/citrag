import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ref, set, get, child } from 'firebase/database'
import { db } from '../services/connection' 

import {
    Container,
    LoginForm
} from '../style/GlobalStyle'

const LoginPage = () => {
    let navigation = useNavigate()

    const [nick, setNick] = useState('')
    const [allNicks, setAllNicks] = useState([])

    useEffect(() => {
        const dbRef = ref(db)

        get(child(dbRef, 'users/'))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    console.log(snapshot.val())
                    setAllNicks(snapshot.val())
                } else {
                    console.log('penis')
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const handleLogin = () => {
        const descarte = []
        descarte.push({ nickname: nick })
        setAllNicks([...descarte])
        console.log(allNicks)
        set(ref(db, 'users/'), {
            nickname: nick
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <Container>
            <LoginForm>
                <span>Citrag</span>

                <input onChange={(e) => setNick(e.target.value)} value={nick} type="text" placeholder='Nickname' />

                <button onClick={() => handleLogin()}>START</button>
            </LoginForm>
        </Container>
    )
}

export default LoginPage