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
import { toast } from 'ngx-sonner';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    RouterLink,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  constructor(private readonly http: HttpClient) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    this.form.reset();

    this.http
      .post(environment.apiUrl + '/auth/password-reset-request', {
        email: this.form.get('email')?.value,
      })
      .pipe(
        catchError((err) => {
          toast.error('Ocurrió un error al enviar el correo');
          return err;
        })
      )
      .subscribe(() => {
        toast.success(
          'Se ha enviado un correo con el enlace para restablecer la contraseña'
        );
      });
  }
}
