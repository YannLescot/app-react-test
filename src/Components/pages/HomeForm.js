import React from 'react'
import styled from 'styled-components';
import FormButtons from './FormButtons';
import NameForm from './NameForm';

export default function HomeForm() {
  return (
    <HomeFormStyled>
    <div class="container">
        <NameForm/>

        <FormButtons/>
    </div>
    </HomeFormStyled>
  )
}

const HomeFormStyled = styled.div`
    .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
`;