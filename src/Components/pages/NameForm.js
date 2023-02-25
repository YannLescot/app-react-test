import React from 'react'
import styled from 'styled-components';
import LabelledInput from '../reusable-ui/LabelledInput';

export default function NameForm() {
  return (
    <NameFormStyled>
      <form>
        <LabelledInput topLabel = "Prénom :"/>
        <LabelledInput topLabel = "Nom :"/>
     </form>
    </NameFormStyled>
  )
}

const NameFormStyled = styled.div`
    form{
        display: flex;
        flex-direction: column;
    } 
`;