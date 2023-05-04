import { Component, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/enviroment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  private router = inject(Router);
  private http = inject(HttpClient);
  private userService = inject(UserService);
  submit(): void {
    this.http.post(BASE_URL+'/users', {
      username: this.username
    }).subscribe((res:any) => {
      this.userService.setUserName(res.username);
      this.router.navigateByUrl('home');
    });
  }

}
