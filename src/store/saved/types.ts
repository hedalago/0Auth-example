import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { NewsData } from '../../apis';

export type SavedAction = ActionType<typeof actions>;

export type SavedState = {
  saved: NewsData[];
  scrollLocation: number;
};
