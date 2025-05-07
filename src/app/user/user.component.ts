// Import Angular core, user model, and the card component
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// Define the UserComponent for displaying user details
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {
  // Input to receive user data and selected state from parent
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // Output event emitter to notify parent when a user is selected
  @Output() select = new EventEmitter();

  // Compute the path to the user's avatar image
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Emit the selected user's ID to the parent component
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
