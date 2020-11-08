import { createReducer } from 'typesafe-actions';

import { addSavedNews, removeSavedNews, setScrollLocation } from './actions';
import { SavedAction, SavedState } from './types';

const initialState: SavedState = {
  saved: [],
  scrollLocation: 0,
};

const savedReducer = createReducer<SavedState, SavedAction>(initialState)
  .handleAction(addSavedNews, (state, action) => {
    return {
      ...state,
      saved: state.saved.concat(action.payload),
    };
  })
  .handleAction(removeSavedNews, (state, action) => {
    return {
      ...state,
      // eslint-disable-next-line no-underscore-dangle
      saved: state.saved.filter((item) => item._id !== action.payload),
    };
  })
  .handleAction(setScrollLocation, (state, action) => {
    return { ...state, scrollLocation: action.payload };
  });
export default savedReducer;
