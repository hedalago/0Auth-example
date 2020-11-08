import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { NewsData } from '../../apis';

export type NewsAction = ActionType<typeof actions>;

export type NewsState = {
  news: NewsData[];
  message: string;
  page: number;
  keyword: string;
  loading: boolean;
  scrollLocation: number;
};
