// Import Angular core, forms, task model, and service
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

// Define the NewTaskComponent for creating tasks
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  // Receive userId from parent
  @Input({ required: true}) userId!: string;

  // Emit close event to parent
  @Output() close = new EventEmitter<void>();

  // Form input fields
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Inject task service
  private tasksService = inject(TasksService)

  // Cancel task creation and notify parent
  onCancel() {
    this.close.emit();
  }

  // Submit new task and notify parent
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      },
      this.userId
    );
    this.close.emit();
  }
}
