import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';



// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MenuModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      { label: 'Explore', icon: 'pi pi-compass', routerLink: '/explore' },
      { label: 'Messages', icon: 'pi pi-envelope', routerLink: '/messages' },
      {
        label: 'Notifications',
        icon: 'pi pi-bell',
        routerLink: '/notifications',
      },
      { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    ];
  }
}
