import React from "react";
import styled from "styled-components";
import DigitalAssistant from "../reusable-ui/ExerciceSiri/DigitalAssistant";
import { assistantConfig } from "../reusable-ui/ExerciceSiri/AssistantConfig.js";

export default function ExerciceSiri() {
  return (
    <StyledContainer>
      <StyledTitle>
        <h2>Personnal Digital Assistants</h2>
      </StyledTitle>

      <StyledElements>
        {assistantConfig.map(({ key, name, image, twitter }) => (
          <DigitalAssistant
            key={key}
            name={name}
            image={image}
            twitter={twitter}
          />
        ))}
      </StyledElements>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const StyledTitle = styled.div`
  background-color: lightgreen;
  margin: 15px;
  h2 {
    font-weight: 400;
    font-size: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const StyledElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;
`;
