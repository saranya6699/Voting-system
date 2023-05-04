import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-system';

  private router = inject(Router);

  isLoggedIn(): boolean {
    return !!window.sessionStorage.getItem('username');
  }

  logout(): void {
    window.sessionStorage.removeItem('username');
    this.router.navigate([''])
  }
}
