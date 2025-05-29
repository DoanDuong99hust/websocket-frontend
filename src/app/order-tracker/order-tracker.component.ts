import { Component } from '@angular/core';
import {WebSocketService} from '../websocket.service';
import {HttpClient} from '@angular/common/http';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-order-tracker',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.scss'
})
export class OrderTrackerComponent {
  product = '';
  order: any = null;

  constructor(private http: HttpClient, private ws: WebSocketService) {}

  createOrder() {
    this.http.post<any>('http://localhost:8080/api/orders', { product: this.product })
      .subscribe(order => {
        this.order = order;
        this.ws.connect(order.id, (updatedOrder) => {
          this.order.status = updatedOrder.status;
        });
      });
  }
}
