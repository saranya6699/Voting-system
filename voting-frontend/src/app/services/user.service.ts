import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { BASE_URL } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private http = inject(HttpClient);

  setUserName(username: string) : void {
    window.sessionStorage.setItem('username',username);
  }

  getUserName(): string {
    return window.sessionStorage.getItem('username') as string;
  }

  getQuestionsForUser(): Observable<any> {
    return this.http.get(BASE_URL + '/questions/' + this.getUserName());
  }

  getAllQuestions(): Observable<any> {
    return this.http.get(BASE_URL+'/questions');
  }
}
