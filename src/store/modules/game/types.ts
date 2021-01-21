import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type GameAction = ActionType<typeof actions>;

export interface Game {
  isSelected1 : string,
  isSelected2 : string,
  Score1 : number,
  Score2 : number,
}

export const ISSELECTED_1 = '@game/ISSELECTED_1';
export const ISSELECTED_2 = '@game/ISSELECTED_2';
export const SCORE_1 = '@game/SCORE_1';
export const SCORE_2 = '@game/SCORE_2'; 
