import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
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

      constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
          this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
      }

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

      removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}
