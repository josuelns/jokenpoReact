import { createStore, Reducer } from 'redux';
import {Game} from './modules/game/types';

export interface StoreState {
  game: Game;
}

const STORE = (
  reducers: Reducer<StoreState>
) => {
  return createStore(reducers);
};

export default STORE
