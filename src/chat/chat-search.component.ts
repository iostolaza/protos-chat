import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chat-search',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="p-4">
      <input type="text" placeholder="Search chats..." class="w-full p-2 border rounded dark:bg-gray-800 dark:text-white" />
    </div>
  `,
})
export class ChatSearchComponent {}