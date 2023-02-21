import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getRouter } from './core/router/store/router.selectors';
import {filter, map, Observable} from "rxjs";

@Component({
  selector: 'pl-navbar',
  template: `
    <div class="sticky-top bg-primary text-white">
      <div class="d-flex flex-row justify-content-end pt-3 pb-3">
        <h4 class="me-4">Mario Rossi</h4>

        <div routerLink="/login" class="pe-2 ps-2" routerLinkActive="text-dark">
          <i class="fas fa-2x fa-lock"></i>
        </div>
        <div
          routerLink="/profile"
          class="pe-2 ps-2"
          routerLinkActive="text-dark"
        >
          <i class="fas fa-2x fa-user-circle"></i>
        </div>
        <div routerLink="/home" class="pe-2 ps-2" routerLinkActive="text-dark">
          <i class="fas fa-2x fa-home"></i>
        </div>
        <div
          routerLink="/invoice-editor"
          class="pe-2 ps-2"
          routerLinkActive="text-dark"
        >
          <i class="fas fa-2x fa-sign-out-alt"></i>
        </div>
      </div>
    </div>

<!--    <div *ngIf="router$ | async as router">path: {{(router)?.state?.url}}</div>-->
        <div>{{url$ | async}}</div>
  `,
})
export class NavbarComponent {
  // router$: Observable<RouterReducerState> = this.store.pipe(select(getRouter));
  url$: Observable<string>;

  constructor(private store: Store<any>) {
    this.url$ = store.pipe(
      select(getRouter),
      filter(data => !!data),
      map(data => data.state.url)
    );
  }
}
