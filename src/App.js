//import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import LoginPage from './Components/LoginPage';

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
  width: 100%;
  height: 100%;
  position: fixed;
`;

export default App;