import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service'; // Assume service for data

@Component({
  selector: 'chat-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex-1 overflow-y-auto">
      <ul>
        <li *ngFor="let chat of chats" class="p-4 border-b flex items-center gap-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
          <img [src]="chat.avatar" alt="User" class="w-8 h-8 rounded-full" />
          <div>
            <p class="font-medium">{{ chat.name }}</p>
            <p class="text-sm text-gray-500">{{ chat.snippet }}</p>
          </div>
          <span class="ml-auto text-xs text-gray-400">{{ chat.timestamp | date:'shortTime' }}</span>
        </li>
      </ul>
    </div>
  `,
})
export class ChatListComponent {
  private chatService = inject(ChatService);
  chats = this.chatService.getRecentChats(); // Mock or from Amplify
}