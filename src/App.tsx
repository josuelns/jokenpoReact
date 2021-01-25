//Default imports
import React, {useMemo, useState } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from './store/createStore';
import { isSelected1, isSelected2, Score1, Score2 } from './store/modules/game/actions';

//Children components
import Display from './components/display/Display'
import Score from './components/score/Score'

//Styles
import {GlobalStyle, Container } from './Globalstyle';

function App() {
  //Initialize Hooks
  const dispatch = useDispatch();  
  const Jogaveis = useMemo(() => ['rock', 'paper', 'scissor'], [])

  //Global States
  const GLOBAL_STATES = useSelector((states: StoreState) =>  states.game)

  //States
  const [Execution, setExecution] = useState(false)

  //My functions
  async function play(): Promise<void> {
    if(!Execution){
      setExecution(true)
      await defComputer()
      await checkWhoWinner(GLOBAL_STATES.isSelected1, GLOBAL_STATES.isSelected2)
      await clearExecution()
    }
  }

  async function defComputer(){
    if(!GLOBAL_STATES.isSelected2){
      let select = ''
      for(let i = 0; i < RandomNumber(25, 1000); i++){ 
        select = Jogaveis[RandomNumber(0, 3)]
      }
      dispatch(isSelected2({selected2: select })) 
    }
  }

  function RandomNumber(min: number, max: number): number{
    return (Math.floor(Math.random() * max + min))
  }

  async function checkWhoWinner(PlayerSelectd: string, ComputerSelectd: string){
    if(GLOBAL_STATES.isSelected1 && GLOBAL_STATES.isSelected2){
      const [rock, paper, scissor] = Jogaveis
      const rules = [
          //winner | Loser
          [rock, scissor],
          [paper, rock],
          [scissor, paper]
      ]

      if(PlayerSelectd === ComputerSelectd) {
        setScore('')
      }
      else{
        rules.forEach(element => {
          if(PlayerSelectd === element[0] && ComputerSelectd === element[1]){
            setScore('player')
          }  
          if(PlayerSelectd === element[1] && ComputerSelectd === element[0]){
            setScore('computer')
          }  
        }) 
      }
    }
  }

  function setScore(who: string){
    const [PlayerScore, ComputerScore] = getScore()
    switch (who){
      case 'player':
        alert('Player Ganhou!')
        dispatch(Score1({score: PlayerScore + 1 }))
        break
      case 'computer':
        alert('Computador Ganhou!')
        dispatch(Score2({score: ComputerScore + 1 }))
        break
      default:
        alert('Empate')
        break
    }
  }

  function getScore(): number[]{
    let PlayerScore = GLOBAL_STATES.Score1 ? GLOBAL_STATES.Score1 : 0 
    let ComputerScore = GLOBAL_STATES.Score2 ? GLOBAL_STATES.Score2 : 0
    return [PlayerScore, ComputerScore]
  }

  async function clearExecution(){
    const TIME_START = 1000 
    setTimeout(() =>{
      dispatch(isSelected1({selected1: '' }))
      dispatch(isSelected2({selected2: '' }))
      setExecution(false)
    },TIME_START)
  }

  GLOBAL_STATES.isSelected1 !== '' && !Execution && play() 

  return (
    <Container className="App">
      <GlobalStyle />
      <h1>Jokenpô</h1>
      <div className='windowGame'>
        <Display 
          display = 'player' 
          isSelected = {GLOBAL_STATES.isSelected1} 
        />
        <Score/>
        <Display 
          display='computer' 
          isSelected = {GLOBAL_STATES.isSelected2} 
        />
      </div>
    </Container>
  );
}

export default App;
