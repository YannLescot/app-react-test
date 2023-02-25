import React from 'react'
import styled from 'styled-components';
import catImage from '../../Images/CatImage.jpg'

export default function Home() {
  return (
    <HomeStyled>
    <h1>Coucou</h1>
    <img src = {catImage} alt = "Chat Mignon"/>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
margin-bottom: 20px;
  text-align: center;
  img {
    max-width: 100%;
    width: 700px;
    height: auto;
  }
`;