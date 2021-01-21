import { combineReducers } from 'redux';

import { StoreState } from '../createStore';

import game from './game/reducer';

export default combineReducers<StoreState>({
  game,
});
