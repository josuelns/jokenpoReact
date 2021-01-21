import { action } from 'typesafe-actions';

import * as types from './types';

export function isSelected1 ({
  selected1,
}: {
  selected1: string;
}) {
  return action(types.ISSELECTED_1, {
    selected1,
  });
}

export function isSelected2 ({
  selected2,
}: {
  selected2: string;
}) {
  return action(types.ISSELECTED_2, {
    selected2,
  });
}

export function Score1 ({
  score,
}: {
  score: number;
}) {
  return action(types.SCORE_1, {
    score,
  });
}

export function Score2 ({
  score,
}: {
  score: number;
}) {
  return action(types.SCORE_2, {
    score,
  });
}