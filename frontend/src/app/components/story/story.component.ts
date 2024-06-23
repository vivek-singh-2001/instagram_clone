import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css',
})
export class StoryComponent {
  stories = [
    { username: 'nik_mishra...', avatarUrl: 'assets/avatar1.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    { username: 'priyankapat...', avatarUrl: 'assets/avatar2.jpg' },
    // Add more stories...
  ];
}
