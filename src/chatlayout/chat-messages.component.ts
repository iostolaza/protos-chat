import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChatService } from './chat.service';

interface Message { text: string; isSelf?: boolean; timestamp?: Date; read?: boolean; }

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="chat-messages">
      @for (msg of messages(); track msg.timestamp) {
        <div [class]="msg.isSelf ? 'flex justify-end' : 'flex'">
          <div [class]="msg.isSelf ? 'chat-message-self' : 'chat-message-other'">
            <p>{{ msg.text }}</p>
            <span class="text-xs text-muted-foreground">{{ msg.timestamp | date:'shortTime' }}</span>
            @if (msg.read) {
              <span class="text-xs">✓</span>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class ChatMessagesComponent {
  private chatService = inject(ChatService);
  messages = this.chatService.getMessages();
}