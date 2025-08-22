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
        <li *ngFor="let chat of chats()" class="p-4 flex items-center gap-3 cursor-pointer hover:bg-[#E0E7FF]">
          <img [src]="chat.avatar" alt="User" class="w-8 h-8 rounded-full" />
          <div>
            <p class="font-medium text-[#334155]">{{ chat.name }}</p>
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
