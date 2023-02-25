import React from 'react'
import styled from 'styled-components';
import Button from '../reusable-ui/Button';

export default function FormButtons() {
  return (
    <FormButtonsStyled>
        <Button btnLabel = "Vider le formulaire"/>
        <Button btnLabel = "Envoyer"/>
    </FormButtonsStyled>
  )
}

const FormButtonsStyled = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
        Button{
            margin-bottom: 5px;
            width: 300px;
        }
`;