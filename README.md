# Task Management Application

This is a simple Task Management Application that allows users to manage their tasks by providing CRUD (Create, Read, Update, Delete) operations. It includes a front-end interface for users to interact with tasks and a back-end RESTful API to handle data operations.

## Features

- Display a list of tasks with titles and checkboxes.
- Add new tasks with titles.
- Edit existing tasks.
- Delete tasks.
- Responsive design for usability on desktop and mobile devices.

## Technologies Used

- **Front-end:**
  - HTML
  - CSS (with responsive design)
  - JavaScript (including jQuery for dynamic functionality)

- **Back-end:**
  - Node.js (Express framework)
  - PostgreSQL (database for storing tasks)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   
2.Install dependencies:
  cd task-management-app
  npm install

3.Set up PostgreSQL database:
  Create a new database named "PERMALIST".
  Set up a table named "items" with columns for task IDs and titles.
  
4.Configure database connection:
  Update the database connection details in index.js file.

5.Start the server:
  npm start/nodemon index.js

6.Open the application in your browser:
  http://localhost:3000

7.Usage
  Navigate to the landing page to view and manage tasks.
  Click on the "+" button to add a new task.
  Click on the pencil icon to edit a task.
  Click on the checkbox to mark a task as completed (and delete if needed).
  The application is responsive and can be used on both desktop and mobile devices.


8.Folder Structure

task-management-app/
│
├── public/
│   ├── assets/
│   │   ├── icons/        # Icon files (e.g., pencil, checkmark)
│   │   └── styles/       # CSS files (e.g., main.css)
│   └── views/            # EJS files (e.g., index.ejs, header.ejs, footer.ejs)
│
├── index.js              # Express server setup and routes
├── queries.sql           # SQL queries for database setup
└── README.md             # Project README file
