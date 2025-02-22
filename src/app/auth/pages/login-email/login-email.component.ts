import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../../ui/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-login-email',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    RouterLink,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login-email.component.html',
})
export class LoginEmailComponent {
  constructor(private readonly http: HttpClient) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.http
      .post(environment.apiUrl + '/auth/login', {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      })
      .subscribe((res) => {
        toast.success('Sesión iniciada correctamente');
        this.form.reset();
      });
  }
}
