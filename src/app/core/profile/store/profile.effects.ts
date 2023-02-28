import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProfileActions from './profile.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.loadProfile),
      switchMap(() =>
        this.profileService.load().pipe(
          map((result) => ProfileActions.loadProfileSuccess({ user: result })),
          catchError(() => of(ProfileActions.loadProfileFailed()))
        )
      )
    )
  );

  editProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.editProfile),
      switchMap(({ user }) =>
        this.profileService.edit(user).pipe(
          map((user) => ProfileActions.editProfileSuccess({ user })),
          catchError(() => of(ProfileActions.editProfileFailed()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}
