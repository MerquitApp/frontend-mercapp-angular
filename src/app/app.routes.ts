import { Routes } from '@angular/router';
import { LoginEmailComponent } from './auth/pages/login-email/login-email.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { RegistrationFormComponent } from './auth/pages/registration-form/registration-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'email',
    component: LoginEmailComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: 'register',
    component: RegistrationFormComponent,
  },
];
