import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OrderTrackerComponent} from './order-tracker/order-tracker.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    OrderTrackerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'order-frontend';
}
