import { Injectable } from '@angular/core';
import SockJS from 'sockjs-client';
import { Client, Message } from '@stomp/stompjs';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private client: Client;

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      reconnectDelay: 5000
    });
  }

  connect(orderId: number, callback: (message: any) => void) {
    this.client.onConnect = () => {
      this.client.subscribe(`/topic/orders/${orderId}`, message => {
        callback(JSON.parse(message.body));
      });
    };
    this.client.activate();
  }
}
