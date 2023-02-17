import { Component } from '@angular/core';

@Component({
  selector: 'pl-navbar',
  template: `
    <div class="sticky-top bg-primary text-white">

      <div class="d-flex flex-row justify-content-end pt-3 pb-3">
        <h4 class="me-4">
          Mario Rossi
        </h4>

        <div routerLink="/login" class="pe-2 ps-2" routerLinkActive="text-dark">
          <i class="fas fa-2x fa-lock"></i>
        </div>
        <div routerLink="/profile" class="pe-2 ps-2" routerLinkActive="text-dark">
          <i class="fas fa-2x fa-user-circle"></i>
        </div>
        <div routerLink="/home" class="pe-2 ps-2" routerLinkActive="text-dark">
          <i class="fas fa-2x fa-home"></i>
        </div>
        <div routerLink="/invoice-editor" class="pe-2 ps-2" routerLinkActive="text-dark">
          <i class="fas fa-2x fa-sign-out-alt"></i>
        </div>

      </div>
    </div>
  `
})
export class NavbarComponent {

}
