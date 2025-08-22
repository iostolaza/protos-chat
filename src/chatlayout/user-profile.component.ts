import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-3 flex items-center gap-2">
      <img src="user-avatar.jpg" alt="User" class="w-10 h-10 rounded-full" />
      <span class="font-semibold text-foreground">Current User</span>
    </div>
  `,
})
export class UserProfileComponent {}
