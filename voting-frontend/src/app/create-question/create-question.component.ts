import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/enviroment';
import { UserService } from '../services/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, MatButtonModule, MatSnackBarModule, MatIconModule],
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {

  router = inject(Router);
  question: string = '';
  private http = inject(HttpClient);
  private userService = inject(UserService);
  private snackBar = inject(MatSnackBar);

  submit(): void {
    this.http.post(BASE_URL + '/question', {
      text: this.question,
      username: this.userService.getUserName()
    }).subscribe(res => {
      this.snackBar.open('Successfully created question', 'Dismiss',{
        duration: 3000
      });
      this.question = '';
    })
  }
}
