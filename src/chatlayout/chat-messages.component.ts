import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';

interface Message { text: string; isSelf?: boolean; timestamp?: Date; read?: boolean; }

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
      <div *ngFor="let msg of messages()" [class]="msg.isSelf ? 'flex justify-end' : 'flex'">
        <div [class]="msg.isSelf ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'" class="p-3 rounded-lg max-w-xs">
          <p>{{ msg.text }}</p>
          <span class="text-xs text-muted-foreground">{{ msg.timestamp | date:'shortTime' }}</span>
          <span *ngIf="msg.read" class="text-xs">✓</span>
        </div>
      </div>
    </div>
  `,
})
export class ChatMessagesComponent {
  private chatService = inject(ChatService);
  messages = this.chatService.getMessages();
}
