// Import Angular core, child components, models, and service
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

// Define the TasksComponent with metadata and inputs
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})

export class TasksComponent {
  // Receive user data from parent component
  @Input({ required:true }) userId!:string;
  @Input({ required:true }) name!:string;

  // Flag to control task addition mode
  isAddingTask = false;
  
  // Inject task service to fetch and manage tasks
  constructor(private tasksService: TasksService) {}

  // Get tasks for the selected user
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // Placeholder for marking task as complete
  onCompleteTask(id: string) {}

  // Show task creation form
  onStartAddTask() {
    this.isAddingTask = true;
  }

  // Hide task creation form
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
