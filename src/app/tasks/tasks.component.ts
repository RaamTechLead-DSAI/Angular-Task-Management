import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ required:true }) userId!:string;
  @Input({ required:true }) name!:string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Sales Target',
      summary: 'Sell 7 cars by end of each month',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Service Target',
      summary: 'Service of each car must be completed within 2 days',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Lead Target',
      summary: 'Identify 30 potential client each month',
      dueDate: '2025-12-31'
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
