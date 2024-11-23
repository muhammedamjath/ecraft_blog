import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavComponent } from '../../../../shared/components/admin-nav/admin-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminNavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class AdminHomeComponent {

}
