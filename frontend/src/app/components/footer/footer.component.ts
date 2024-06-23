import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <nav>
        <a href="#">About</a> • <a href="#">Help</a> • <a href="#">Press</a> •
        <a href="#">API</a> • <a href="#">Jobs</a> • <a href="#">Privacy</a> •
        <a href="#">Terms</a> • <a href="#">Locations</a> •
        <a href="#">Language</a> • <a href="#">Meta Verified</a>
      </nav>
      <p>© 2024 INSTAGRAM FROM META</p>
    </footer>
  `,
  styles: [
    `
      footer {
        text-align: center;
        padding: 20px;
        font-size: 12px;
        color: #8e8e8e;
      }
      nav a {
        color: #8e8e8e;
        text-decoration: none;
      }
    `,
  ],
})
export class FooterComponent {}
