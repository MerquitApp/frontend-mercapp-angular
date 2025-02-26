import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from "../../layouts/auth-layout/auth-layout.component"; 

const BACKEND_URL = 'http://localhost:3001/api';

@Component({
  selector: 'app-registration-form',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, AuthLayoutComponent, RouterModule], 
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.registrationForm.invalid) {
      this.toastr.error('Por favor, revisa los campos del formulario');
      return;
    }

    const { confirmPassword, ...formData } = this.registrationForm.value;

    if (formData.password !== confirmPassword) {
      this.toastr.error('Las contraseñas no coinciden');
      return;
    }

    try {
      await this.http
        .post(`${BACKEND_URL}/auth/register`, formData, { withCredentials: true })
        .toPromise();

      this.toastr.success('Revisa tu correo para confirmar tu cuenta');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
      this.toastr.error('Error al registrarte');
    }
  }
}
