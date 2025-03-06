import { Routes } from '@angular/router';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { LoginComponent } from './features/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/feed/feed.component').then(m => m.FeedComponent),
      },
      {
        path: 'new-post',
        loadComponent: () =>
          import('./features/create-update-post/create-post.component').then(
            m => m.CreateUpdatePostComponent
          ),
      },
      {
        path: 'edit-post/:postId',
        loadComponent: () =>
          import('./features/create-update-post/create-post.component').then(
            m => m.CreateUpdatePostComponent
          ),
      },
      {
        path: 'user/:userId',
        loadComponent: () =>
          import('./features/user-profile/user-profile.component').then(
            m => m.UserProfileComponent
          ),
      },
      {
        path: 'post/:postId',
        loadComponent: () =>
          import('./features/comment-post/comment-post.component').then(
            m => m.CommentPostComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];
