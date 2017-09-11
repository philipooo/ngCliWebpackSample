import {MyEffects} from './effects';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import * as myActions from './actions';

describe('My Effects', () => {
  let effects: MyEffects;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyEffects,
        provideMockActions(() => actions),
        // other providers
      ],
    });

    actions = new ReplaySubject(1);
    effects = TestBed.get(MyEffects);
  });

  it('should work', (done) => {
    effects.test$.subscribe(() => {
      done();
    });

    actions.next(new myActions.Test());
  });
});
