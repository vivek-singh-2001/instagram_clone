import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-sidebar">
      <h3>Suggested for you</h3>
      <div class="suggestion" *ngFor="let suggestion of suggestions">
        <img [src]="suggestion.avatarUrl" [alt]="suggestion.username" />
        <div>
          <span>{{ suggestion.username }}</span>
          <span class="suggestion-info">{{ suggestion.info }}</span>
        </div>
        <button>Follow</button>
      </div>
    </div>
  `,
  styles: [
    `
      .profile-sidebar {
        width: 300px;
        padding: 20px;
      }
      .suggestion {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }
      .suggestion img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .suggestion-info {
        font-size: 12px;
        color: #8e8e8e;
      }
    `,
  ],
})
export class ProfileComponent {
  suggestions = [
    {
      username: 'jpdu.de',
      info: 'Follows some of your contacts',
      avatarUrl: 'assets/suggestion1.jpg',
    },
    {
      username: 'patel___0104',
      info: 'Followed by pinu_shingala_2004...',
      avatarUrl: 'assets/suggestion2.jpg',
    },
    // Add more suggestions...
  ];
}
