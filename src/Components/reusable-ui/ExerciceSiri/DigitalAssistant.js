import React from "react";
import styled from "styled-components";

export default function DigitalAssistant({ name, image, twitter }) {
  return (
    <ContainerStyled>
      <img src={image} alt="logo de l'assistant" />
      <small>
        {name}
        {twitter}
      </small>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  //background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  small {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    font-weight: 100;
  }
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
