import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';

@Component({
  selector: 'chat-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div *ngFor="let msg of messages()" [class]="msg.isSelf ? 'flex justify-end' : 'flex'">
        <div [class]="msg.isSelf ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'" class="p-3 rounded-lg max-w-xs">
          <p>{{ msg.text }}</p>
          <span class="text-xs text-gray-400">{{ msg.timestamp | date:'shortTime' }}</span>
          <span *ngIf="msg.read" class="text-xs">✓</span>
        </div>
      </div>
    </div>
  `,
})
export class ChatMessagesComponent {
  private chatService = inject(ChatService);
  messages = signal(this.chatService.getMessages()); // Use signals for efficient updates
}