import React from 'react'
import {StyledScore} from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faUser } from '@fortawesome/free-solid-svg-icons' 

//Redux
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/createStore';

function Score(props){
  const PlayerScore = useSelector((state: StoreState) => state.game.Score1)
  const IAScore = useSelector((state: StoreState) => state.game.Score2)
  return (
      <StyledScore>
        <section>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <h3>JOGADOR : </h3>
          <p>{PlayerScore}</p>
        </section>
        <section>
          <FontAwesomeIcon icon={faUser} size="2x"  />
          <h3>COMPUTADOR : </h3>
          <p>{IAScore}</p>
        </section>
      </StyledScore>
  )
}

export default Score