import React from 'react';
import './App.css';

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
  const PlayerSelected = useSelector((state: StoreState) => state.game.isSelected1)
  const IASelected = useSelector((state: StoreState) => state.game.isSelected2)

  useSelector((state: StoreState) => {
    play(state)
  })

  async function play(state: StoreState){
    if(state.game.isSelected1){
        let select = ''
        const data = ['rock', 'paper', 'scissor']

        //def J2
        if(!state.game.isSelected2){
          do{
            for(let i = 0; i < Math.floor(Math.random() * 100 + 10); i++){
              const random = Math.floor(Math.random() * 3 + 0) 
              select = data[random]
            }
          }
          while(select === undefined)
          dispatch(isSelected2({selected2: select })) 
        }
        
        setTimeout(() => {
            if(state.game.isSelected1 === select) alert('Empate')
        
            const [rock, paper, scissor] = data
        
            const rules = [
                //winner | Loser
                [rock, scissor],
                [paper, rock],
                [scissor, paper]
            ]
            
            rules.forEach(element => {
                if(state.game.isSelected1 === element[0] && select === element[1]){
                  alert('Player Ganhou!')
                  dispatch(Score1({score: state.game.Score1 +1 }))
                }  
                if(state.game.isSelected1 === element[1] && select === element[0]){
                  alert('Computador Ganhou!')
                  dispatch(Score2({score: state.game.Score2 +1 }))
                }  
            })

            //
            setTimeout(() =>{
                dispatch(isSelected1({selected1: '' }))
                dispatch(isSelected2({selected2: '' }))
            },600)
        }, 1000)
    }
  }

  return (
    <Container className="App">
      <GlobalStyle />
      <h1>Jokenpô</h1>
      <div className='windowGame'>
        <Display isSelected={PlayerSelected} />
        <Score/>
        <Display isComputer={true} isSelected={IASelected} />
      </div>
    </Container>
  );
}

export default App;
