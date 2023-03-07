import React from "react";
import styled from "styled-components";
import FormButtons from "./FormButtons";
import NameForm from "./NameForm";

export default function HomeForm() {
  return (
    <HomeFormStyled>
      <NameForm />
      <FormButtons />
    </HomeFormStyled>
  );
}

const HomeFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
