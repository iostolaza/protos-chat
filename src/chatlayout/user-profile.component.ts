import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 border-b border-border flex items-center gap-3 bg-card text-card-foreground">
      <img src="user-avatar.jpg" alt="User" class="w-10 h-10 rounded-full" />
      <span class="font-semibold">Current User</span>
    </div>
  `,
})
export class UserProfileComponent {}
