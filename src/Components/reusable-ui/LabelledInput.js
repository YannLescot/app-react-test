import React from 'react'
import styled from 'styled-components';

export default function LabelledInput({topLabel}) {
  return (
    <LabelledInputStyled>
            <label>{topLabel}</label>
            <input></input>
    </LabelledInputStyled>
  )
}

const LabelledInputStyled = styled.div`
        display: flex;
        flex-direction: column;
`;