import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  tweetMessage: string = '';
  tweetMaxLength: number = 240;
  tweetRemain: number = this.tweetMaxLength;

  constructor(private messageService: MessageService) {}
  characterCounterTweet() {
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
  }

  sendTweet() {
    if (this.tweetMessage.length > 0) {
      this.messageService.addMessage(this.tweetMessage);
      this.tweetMessage = '';
      this.tweetRemain = this.tweetMaxLength;
    } else {
      alert('Digite uma mensagem para poder tweetar!');
    }
  }
}
