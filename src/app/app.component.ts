import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; 

import { UserProfileComponent } from "../chat/user-profile.component";
import { ChatSearchComponent } from "../chat/chat-search.component";
import { ChatListComponent } from "../chat/chat-list.component";
import { ChatHeaderComponent } from "../chat/chat-header.component";
import { ChatMessagesComponent } from "../chat/chat-messages.component";
import { MessageInputComponent } from "../chat/message-input.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    UserProfileComponent,
    ChatSearchComponent,
    ChatListComponent,
    ChatHeaderComponent,
    ChatMessagesComponent,
    MessageInputComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
