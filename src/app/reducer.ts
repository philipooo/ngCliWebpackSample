import {Action} from '@ngrx/store';
import * as myActions from './actions';

export interface MyState {
  something: string;
}

export const initialState: MyState = {
  something: '',
};

export function myReducer(state = initialState, action: Action): MyState {
  switch (action.type) {
    case myActions.TEST:
      return {
        ...state,
        something: 'happened',
      };
    default:
      return state;
  }
}
