import './App.css';

import {
  Container,
  Content
} from './style/GlobalStyle'

import PlayertList from './components/PlayerList';

function App() {
  return (
    <Container>
      <h1>Welcome to Citrag</h1>
      <Content>
        <PlayertList />
      </Content>
    </Container>
  );
}

export default App;
