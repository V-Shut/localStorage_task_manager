# Task Manager

## Project Description

This project implements a simple task manager that allows users to add, delete, and change the status of their tasks. All data is stored in local storage, enabling users to keep their information even after reloading the page. Users can quickly enter new tasks, view a list of active tasks, and delete them with a single click.

### Technologies

- **React**: A library for building user interfaces.
- **JavaScript**: The primary programming language for application logic.
- **CSS**: For styling components.

## Solution Analysis

The project consists of three main components:

1. **App**: The main component that contains the logic for retrieving, deleting, and changing the status of tasks. It handles local storage and passes data to other components.
2. **Task**: A component that displays a single task. It includes buttons to change the status and delete the task. It implements a smooth disappearing animation when the task is deleted.
3. **Input**: A component for entering new tasks. It handles the Enter key event to add new tasks.

### Algorithmic Nature of the Problem

This task is algorithmic in nature, as it requires implementing efficient solutions for performing various operations on data, specifically:

- Adding new elements to local storage.
- Retrieving data from local storage and processing it.
- Changing the state of elements based on user interaction (e.g., changing the task status).
- Animating elements upon their deletion, which requires DOM manipulation.

The choice of this task as an example is based on its demonstration of the fundamentals of working with local storage, event handling, and providing practical experience in creating simple UI components using React.

## Time Complexity

- **Adding a new task**: O(1) — The operation of adding a task to local storage is constant time.
- **Retrieving all tasks**: O(n) — To retrieve all elements, we need to iterate through all keys in local storage.
- **Changing the status of a task**: O(1) — Changing a task's status is done by directly accessing it via its key.
- **Deleting a task**: O(1) — The operation of removing an element from local storage is also constant time.

## Space Complexity

- **Data Storage**: O(n) — Using local storage to keep `n` elements, where `n` is the number of tasks in the list. Each task takes up a certain amount of memory depending on the data structure.

## Conclusion

This project demonstrates how to implement a basic task manager using React and local storage. It serves as an excellent example for learning the fundamentals of working with components, state management, and user interaction.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
