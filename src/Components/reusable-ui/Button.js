import React from 'react'
import styled from 'styled-components';

export default function Button({btnLabel}) {
  return (
    <ButtonStyled>
        {btnLabel}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
`;