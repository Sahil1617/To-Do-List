#To-Do List 📝

Overview 🖥️:
A simple to-do list web application that allows users to add and remove tasks using JavaScript. This app uses basic DOM manipulation, event handling, and event delegation to manage tasks.

Features ✨
1.Add Tasks ➕: Users can enter a task in the input field and click the "Add" button to add the task to the list.
2.Delete Tasks ❌: Each task comes with a "Delete" button that allows the user to remove tasks from the list.
3.Event Delegation 🔄: The app uses event delegation to handle task deletion, making it more efficient by attaching a single event listener to the parent ul element.


How It Works 🛠️
Adding a Task:
When the user clicks the "Add" button, the task entered in the input field is added as a new list item (li) inside an unordered list (ul).
A "delete" button is also added to each task to allow users to remove them.

Deleting a Task:
Clicking the "Delete" button next to a task will remove that task from the list.

Event Delegation:
The ul element listens for clicks on any of its children (like the "delete" buttons), allowing for efficient task deletion without adding individual listeners to each task.

 😊
