import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="p-4 flex gap-2">
      <input type="text" placeholder="Type a message..." class="flex-1 p-2 border rounded bg-white text-foreground placeholder:text-muted-foreground" />
      <button class="bg-card text-foreground p-2 rounded">Send</button>
      <input type="file" class="hidden" id="file" />
      <label for="file" class="cursor-pointer text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg></label>
    </div>
  `,
})
export class MessageInputComponent {}
