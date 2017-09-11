import {Actions, Effect} from '@ngrx/effects';
import * as myActions from './actions';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';

@Injectable()
export class MyEffects {

  @Effect({dispatch: false}) test$ = this.actions$
    .ofType(myActions.TEST)
    .do(() => console.log('hello'));

  constructor(
    private actions$: Actions,
  ) {}

}
