import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

export interface Chat { id: string; name: string; avatar: string; snippet: string; timestamp: Date; }
export interface Message { id: string; text: string; timestamp: Date; read: boolean; isSelf: boolean; }

@Injectable({ providedIn: 'root' })
export class ChatService {
  private client = generateClient<Schema>();

  getRecentChats(): Chat[] { return []; } // Amplify query
  getMessages(): Message[] { return []; } // Amplify sub
}