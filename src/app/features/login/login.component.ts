import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as RouterActions from "../../core/router/store/router.actions";

@Component({
  selector: 'pl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private store: Store<any>) {
  }

  go() {
    this.store.dispatch(RouterActions.go({ path: ['home']}));
    // this.router.navigateByUrl('home');
  }
}
