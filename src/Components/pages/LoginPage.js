import React from "react";
import styled from "styled-components";
import Home from "../reusable-ui/LoginPage/Home";
import HomeForm from "../reusable-ui/LoginPage/HomeForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Home />
      <HomeForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
`;
