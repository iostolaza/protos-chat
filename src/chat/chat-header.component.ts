import { Component } from '@angular/core';

@Component({
  selector: 'chat-header',
  standalone: true,
  template: `
    <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
      <img src="recipient-avatar.jpg" alt="Recipient" class="w-10 h-10 rounded-full" />
      <span class="font-semibold">Chatting with [Name]</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14" /></svg> <!-- Heroicon example -->
    </div>
  `,
})
export class ChatHeaderComponent {}