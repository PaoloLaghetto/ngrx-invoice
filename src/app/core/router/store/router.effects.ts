import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as RouterActions from './router.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterEffects {
  goEffects$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.go),
        tap((action) => {
          this.router.navigate(action.path, action.extras);
        })
      ),
    { dispatch: false }
  );

  backEffects$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.forward),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  bforwardEffects$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
