// Define structure of a task object
export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

// Define structure of data used when creating a new task
export interface NewTaskData {
  title: string; 
  summary: string;
  date: string;
}