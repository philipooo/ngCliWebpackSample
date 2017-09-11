import {Action} from '@ngrx/store';

export const TEST = 'TEST';

export class Test implements Action {
  readonly type = TEST;
}
