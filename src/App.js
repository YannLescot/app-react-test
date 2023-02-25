//import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import LoginPage from './Components/pages/LoginPage';

function App() {
  return(
    <AppStyled>
      <LoginPage/>
    </AppStyled>
  )
}

const AppStyled = styled.div`
display: flex;
justify-content: space-evenly;
background-color: lavender;
height: 100vh; // vh = viewPort height ce qui donne 100% de la page quoi
`;

export default App;