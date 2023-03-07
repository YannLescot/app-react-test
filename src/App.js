//import logo from './logo.svg';
import styled from "styled-components";
import "./App.css";
import LoginPage from "./Components/pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/reusable-ui/NavBar";
import ExerciceSiri from "./Components/pages/ExerciceSiri";

function App() {
  return (
    <Router>
      <AppStyled>
        <NavBar />

        <Routes>
          <Route path="/" exact element=<LoginPage /> />
          <Route path="/ex1" exact element=<ExerciceSiri /> />
        </Routes>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: lavender;
  height: 100vh; // vh = viewPort height ce qui donne 100% de la page quoi
`;

export default App;
