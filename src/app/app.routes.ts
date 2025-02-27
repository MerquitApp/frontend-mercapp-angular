import { Routes } from '@angular/router';
import { LoginEmailComponent } from './auth/pages/login-email/login-email.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { RegistrationFormComponent } from './auth/pages/registration-form/registration-form.component';
import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password.component';

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
    path: 'register',
    component: RegistrationFormComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
