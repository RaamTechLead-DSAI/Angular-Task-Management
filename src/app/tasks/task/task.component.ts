// Import Angular core, task model, dependencies, and services
import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

// Define the TaskComponent with metadata
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  // Input to receive task data
  @Input({required: true}) task!: Task;

  // Inject TasksService to perform operations
  private tasksService = inject(TasksService)

  // Handle task completion (removal)
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
