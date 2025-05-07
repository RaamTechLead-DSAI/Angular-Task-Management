// Import necessary Angular core and custom components
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

// Define the root component with metadata
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Initialize dummy users
  users = DUMMY_USERS;
  selectedUserId?: string;

  // Compute the selected user based on ID
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  // Handle user selection
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
