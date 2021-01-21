import * as types from './types';

const initialState: Game = {
  isSelected1 : '',
  isSelected2 : '',
  Score1 : 0,
  Score2 : 0,
};

export interface Game {
  isSelected1 : string,
  isSelected2 : string,
  Score1 : number,
  Score2 : number,
}

export default function header (
  state = initialState,
  action: types.GameAction
): Game {
  switch (action.type) {
    case types.ISSELECTED_1:
      return {
        ...state,
        isSelected1: action.payload.selected1
      };
    case types.ISSELECTED_2:
      return {
        ...state,
        isSelected2: action.payload.selected2
      };  
    case types.SCORE_1:
      return {
        ...state,
        Score1: action.payload.score,
      };
    case types.SCORE_2:
      return {
        ...state,
        Score2: action.payload.score,
      };
    default:
      return state;
  }
}
