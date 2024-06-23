import { Routes,RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '/pp', component: FeedComponent },
  { path: 'profile/:username', component: ProfileComponent },
  // { path: '**', component: PageNotFoundComponent },
];











