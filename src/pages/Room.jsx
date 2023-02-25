import {
    Container,
    Content
} from '../style/GlobalStyle'

import PlayertList from '../components/PlayerList';
import Canvas from '../components/Canvas';

const Room = () => {
    return(
        <>
            <Container>
                <h1>Welcome to Citrag</h1>
                <Content>
                    <PlayertList />
                    <div className='canvas'>
                        <Canvas />

                        <h1>Teste</h1>
                    </div>
                </Content>
            </Container>            
        </>
    )
}

export default Room