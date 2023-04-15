import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  constructor() {}

  addMessage(message: string) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  clearMessage() {}
}
