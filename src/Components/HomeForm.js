import React from 'react'
import styled from 'styled-components';

export default function HomeForm() {
  return (
    <HomeFormStyled>
    <div class="container">
        <form class="nameForm">
            <label>Prénom :</label>
            <input></input>

            <label>Nom :</label>
            <input></input>
        </form>

        <div class="formButtons">
            <button>Vider le formulaire</button>
            <button>Envoyer</button>
        </div>
    </div>
    </HomeFormStyled>
  )
}

const HomeFormStyled = styled.div`
        .container{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
        }
        .nameForm{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .formButtons{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            button{
                margin-bottom: 5px;
                width: 300px;
            }
        }
`;