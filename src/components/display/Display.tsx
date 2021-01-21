//Default Imports
import React from 'react'
import {StyledDisplay} from './style'

//Redux
import { useDispatch } from 'react-redux';
import { isSelected1 } from '../../store/modules/game/actions';

interface MyProps{
    isComputer?: boolean
    isSelected: string
}

const Display: React.FC<MyProps> = ({isComputer = false, isSelected = ''}) => {
    const dispatch = useDispatch();

    function handleClick(option: string){
        if(option === 'rock'){
            dispatch(isSelected1({selected1: option }))
        }
        if(option === 'paper'){
            dispatch(isSelected1({selected1: option }))
        }
        if(option === 'scissor'){
            dispatch(isSelected1({selected1: option }))
        }
        if(option === ''){  
            dispatch(isSelected1({selected1: option }))
        }
    }

    return (
        <StyledDisplay className={!isComputer ? 'DisplayUser' : 'DisplayComputer'}>
            <img src='http://localhost:3000/assents/img/pedra.png'   className={isSelected=== 'rock' ? 'active' : ''  }    onClick={()=> !isComputer && handleClick('rock')} alt='Pedra' />
            <img src='http://localhost:3000/assents/img/papel.png'   className={isSelected === 'paper' ? 'active' : '' }   onClick={()=> !isComputer && handleClick('paper')} alt='Papel'/>
            <img src='http://localhost:3000/assents/img/tesoura.png' className={isSelected === 'scissor' ? 'active' : ''}  onClick={()=> !isComputer  && handleClick('scissor')} alt='Tesoura'/>
        </StyledDisplay>
    )
}

export default Display