import { Injectable, signal } from '@angular/core';

interface ChatItem { id: string; name: string; lastMessage: string; snippet?: string; avatar?: string; timestamp?: Date; }
interface Message { text: string; sender: string; isSelf?: boolean; timestamp?: Date; read?: boolean; }

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  getRecentChats() {
    return signal<ChatItem[]>([]);  
  }

  getMessages() {
    return signal<Message[]>([]);  
  }
}
