import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Github, LucideAngularModule } from 'lucide-angular';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, AuthLayoutComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  readonly GithubIcon = Github;
}
