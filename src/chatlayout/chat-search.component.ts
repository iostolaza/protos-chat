import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-search',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="p-4">
      <input type="text" placeholder="Search chats..." class="w-full p-1 border rounded bg-white text-foreground placeholder:text-muted-foreground" />
    </div>
  `,
})
export class ChatSearchComponent {}
