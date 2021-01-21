import { createStore, Reducer } from 'redux';
import {Game} from './modules/game/types';

export interface StoreState {
  game: Game;
}

export type StoreAction = AuthAction | ThemeAction;

const STORE = (
  reducers: Reducer<StoreState, StoreAction>
) => {
  return createStore(reducers);
};

export default STORE
