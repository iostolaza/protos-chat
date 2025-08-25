import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  template: `
    <div class="flex items-center gap-3">
      <div class="p-2 rounded text-foreground flex items-center gap-2 w-full">
        <img src="/src/images/icons/user.svg" alt="Recipient" class="w-10 h-10 rounded-full" />
        <span class="font-semibold">Chatting with Neo</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14" /></svg>
    </div>
  `,
})
export class ChatHeaderComponent {}
