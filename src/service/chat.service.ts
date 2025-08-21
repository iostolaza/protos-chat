import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource'; // From Amplify schema

@Injectable({ providedIn: 'root' })
export class ChatService {
  private client = generateClient<Schema>();

  getRecentChats() { /* Query Amplify Data */ }
  getMessages() { /* Subscribe to real-time */ }
  // Implement subscriptions per Amplify docs
}