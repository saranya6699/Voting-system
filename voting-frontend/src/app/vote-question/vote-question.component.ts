import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { BASE_URL } from 'src/enviroment';
import { UserService } from '../services/user.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote-question',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './vote-question.component.html',
  styleUrls: ['./vote-question.component.css']
})
export class VoteQuestionComponent {

  private http = inject(HttpClient);
  private userService = inject(UserService);
  router = inject(Router);

  questions$: Observable<any[]> = this.userService.getQuestionsForUser();


  vote(question: any, count: number): void {
    question.positiveCount += count;
    const username = this.userService.getUserName();
    this.http.post(BASE_URL + '/vote', {  ...question, username }).subscribe(_ => {
      this.questions$ = this.userService.getQuestionsForUser();
    });
  }
}
