# Task Manager App

## Demo

[Live Demo Link](#)  
(Replace this with the actual link to the demo)

## Features

- **Add, Delete, and Mark Tasks as Completed**: Users can manage tasks by adding, deleting, and marking them as completed.
- **Responsive Design**: The application provides a fully responsive UI, optimized for desktop and mobile devices.
- **State Management with Redux Toolkit**: Uses Redux Toolkit for managing the app's state efficiently.
- **Persist Data**: Tasks are persisted in local storage to ensure data is retained even after page reloads.
- **Dark Mode Toggle**: A dark mode toggle is implemented using redux persist.
- **Drag-and-Drop Functionality** (Bonus): Tasks can be reordered using drag-and-drop.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RicardoTrejoSanjuan/react-angular-development-task.git
   cd task-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Libraries and Tools

- **@reduxjs/toolkit**: State management using Redux Toolkit.
- **react-redux**: To connect React with Redux state management.
- **redux-persist**: To persist the Redux state in local storage.
- **react-router-dom**: Routing for the application.
- **react-icons**: Used for adding icons in the UI.
- **sweetalert2**: For displaying elegant alert dialogs.
- **uuidv4**: For generating unique identifiers for tasks.
- **tailwindcss**: Utility-first CSS framework for styling.

## Usage

- **Task Management**: Users can:
  - Add new tasks."
  - Delete tasks by clicking on the x icon.
  - Users can complete tasks by dragging to the done panel
  
- **Drag-and-Drop**: Reorganize tasks by dragging and dropping them in the task list.
- **Dark Mode**: Toggle dark mode using the button in the header.

## Contributing

We welcome contributions to this project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

Please ensure that your code adheres to the existing coding style and passes all tests before submitting a pull request.