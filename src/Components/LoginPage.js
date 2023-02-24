import React from 'react'
import styled from 'styled-components';
import Home from './Home';
import HomeForm from './HomeForm';


export default function LoginPage() {
  return (
    <LoginPageStyled>
        <Home/>
        <HomeForm/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  HomeForm{
    margin-bottom: 10px;
  }
`;
