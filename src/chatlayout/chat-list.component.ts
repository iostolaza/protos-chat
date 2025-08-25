import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';

interface ChatItem { id: string; name: string; snippet?: string; avatar?: string; timestamp?: Date; }

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex-1 overflow-y-auto">
      <ul>
        <li *ngFor="let chat of chats()" class="chat-item-hover">
          <img [src]="chat.avatar || '/src/images/icons/user.svg'" alt="User" class="w-8 h-8 rounded-full" />
          <div>
            <p class="chat-item-text">{{ chat.name }}</p>
            <p class="text-sm text-muted-foreground">{{ chat.snippet }}</p>
          </div>
          <span class="ml-auto text-xs text-muted-foreground">{{ chat.timestamp | date:'shortTime' }}</span>
        </li>
      </ul>
    </div>
  `,
})
export class ChatListComponent {
  private chatService = inject(ChatService);
  chats = this.chatService.getRecentChats();
}