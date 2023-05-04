import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  private userService = inject(UserService);
  results$ = this.userService.getAllQuestions();
  router = inject(Router);
  
  getWidth(result:any, type='Yes'): number {
    let width;
    if (type==='Yes') {
      width = (result.positiveCount)/(result.count)*100;
    }
    else {
      width = (result.count-result.positiveCount)/(result.count)*100;
    }
    return isNaN(width) ? 0 : +width.toFixed(2);
  }

  getColor(result: any, type:string): string {
    const width = this.getWidth(result, type);
    if (width) {
      return type==='Yes' ? 'green' : 'red';
    }
    else return 'lightgrey'
  }
}
