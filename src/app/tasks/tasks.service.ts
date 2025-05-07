// Import Angular core and task model type
import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

// Mark this service as injectable and available app-wide
@Injectable({providedIn: 'root'})
export class TasksService {
    // Task list (initialized with default values)
    private tasks = [
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
      ];

      // Load tasks from localStorage on initialization
      constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
          this.tasks = JSON.parse(tasks);
        }
      }

      // Get all tasks for a specific user
      getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
      }

      // Add a new task to the list
      addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
      }

      // Remove a task by ID
      removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      // Save the current task list to localStorage
      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}
