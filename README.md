# Task Management Application

This is a task management application built with Angular. The app allows users to view and manage their tasks in a user-friendly interface.

## Features

- **View tasks**: Select a user to view their tasks.
- **Add new tasks**: Add tasks with a title, summary, and due date.
- **Complete tasks**: Mark tasks as completed (removes them from the list).
- **Clean UI**: The app uses reusable card components for displaying user and task information.

## Project Structure

### Components:
- **AppComponent**: The root component that manages user selection and displays their tasks.
- **UserComponent**: Displays user details and allows selection.
- **TaskComponent**: Displays an individual task and allows marking it as completed.
- **NewTaskComponent**: A form for adding new tasks.
- **CardComponent**: A reusable component for displaying content in a card layout.
  
### Services:
- **TasksService**: Manages task-related operations like adding, removing, and fetching tasks.
  
### Models:
- **Task**: Defines the structure of a task.
- **User**: Defines the structure of a user.

## Naviagte to Application
http://localhost:4200/ in your browser to view the app

## Usage
- Select a User: Click on a user to view their tasks.
- View Tasks: Tasks for the selected user will be displayed. You can see the task's title, summary, and due date.
- Add a Task: Click the "Add Task" button to open a form where you can create a new task.
- Complete a Task: Mark tasks as completed by clicking the "Complete" button, which removes the task.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies**:

   ```bash
   npm install

3. **Serve the application**:

  ```bash
  ng serve
