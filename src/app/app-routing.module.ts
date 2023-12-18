import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MainComponent } from './pages/main/main.component';
import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard]
  },
  { path: 'signup', component: RegistrationComponent },
  { path: 'signin', component: LoginComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'group',
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule),
    canActivate: [authGuard]
  },
  {
    path: 'conversation',
    loadChildren: () =>
      import('./conversation/conversation.module').then(
        m => m.ConversationModule
      ),
    canActivate: [authGuard]
  },
  { path: '**', component: PageNoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
