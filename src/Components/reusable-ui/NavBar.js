import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavStyled>
      <Link to="/">Login</Link>
      <Link to="/ex1">ExerciceSiri</Link>
    </NavStyled>
  );
}
const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    color: black;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;
