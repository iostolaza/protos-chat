import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from '../chatlayout/user-profile.component';
import { ChatSearchComponent } from '../chatlayout/chat-search.component';
import { ChatListComponent } from '../chatlayout/chat-list.component';
import { ChatHeaderComponent } from '../chatlayout/chat-header.component';
import { ChatMessagesComponent } from '../chatlayout/chat-messages.component';
import { MessageInputComponent } from '../chatlayout/message-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    ChatSearchComponent,
    ChatListComponent,
    ChatHeaderComponent,
    ChatMessagesComponent,
    MessageInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'protos-chat';
}
