import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items = [
    {
      text: 'Create Question',
      url: 'create'
    },
    {
      text: 'View Questions and Vote',
      url: 'vote'
    },
    {
      text: 'View Results',
      url: 'results'
    }
  ];

  router = inject(Router);
}
