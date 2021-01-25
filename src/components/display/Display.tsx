//Default Imports
import React from 'react'
import {StyledDisplay} from './style'

//Redux
import { useDispatch } from 'react-redux';
import { isSelected1 } from '../../store/modules/game/actions';

//Interfaces
interface MyProps{
    display: string
    isSelected: string
}

const Display: React.FC<MyProps> = ({display, isSelected}) => {
    //Initialize Hooks
    const dispatch = useDispatch();
    
    //My functions
    function handleClick(option: 'rock' |'paper'| 'scissor'){
        dispatch(isSelected1({selected1: option }))
    }

    return (
        <StyledDisplay className={`Display_${display}`}>
            <img 
                src = 'http://localhost:3000/assents/img/pedra.png'   
                className = {
                    isSelected === 'rock' ? 'active' : ''  
                }  
                onClick = {
                    ()=> display === 'player' && handleClick('rock')
                }    
                alt='Pedra' 
            />
            <img 
                src = 'http://localhost:3000/assents/img/papel.png'
                className = {
                    isSelected === 'paper' ? 'active' : '' 
                }  
                onClick = {
                    ()=> display === 'player' && handleClick('paper')
                }   
                alt = 'Papel'
            />
            <img 
                src = 'http://localhost:3000/assents/img/tesoura.png' 
                className = { 
                    isSelected  === 'scissor' ? 'active' : ''
                } 
                onClick = {
                    ()=> display === 'player' && handleClick('scissor')
                } 
                alt='Tesoura'
            />
        </StyledDisplay>
    )
}

export default Display