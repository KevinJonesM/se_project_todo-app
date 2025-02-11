# **Simple Todo App**

## 📝 **Description**

The **Simple Todo App** is a user-friendly application designed to help users manage their daily tasks. It allows users to:
- 🟢 **Add tasks**
- 🟢 **Edit tasks**
- 🟢 **Mark tasks as completed or uncompleted**
- 🟢 **Delete tasks effortlessly**
This application is built with modern web development practices, focusing on usability, modularity, and responsiveness.

---

## ⚙️ **Functionality**

### Core Features:
- 🔹 **Add new tasks:** Users can open a modal form to add tasks with a name and an optional due date.
- 🔹 **Toggle completion status:** Each task has a checkbox to mark it as completed or not.
- 🔹 **Delete tasks:** Tasks can be easily removed when no longer needed.
- 🔹 **Responsive design:** Works seamlessly on desktop and mobile.
- 🔹 **Keyboard & click support:**
  - Press `Esc` to close the modal.
  - Click outside the modal to close it.
- 🔹 **Unique IDs for tasks:** Uses the `uuid` library to ensure every task has a unique identifier.

---

## ⚙️ **Technology Stack**  

| Technology | Purpose |
|------------|---------|
| **HTML5** | Provides the app's structure. |
| **CSS3 (BEM methodology)** | Ensures modular and maintainable styles. |
| **JavaScript (ES6)** | Adds interactivity and follows OOP principles. |
| **UUID** | Generates unique task IDs. |
| **GitHub Pages** | Hosts the live version of the project. |
| **Prettier** | Maintains clean and consistent code formatting. |

---

## 🛠 **Object-Oriented Programming (OOP) Implementation**  

### **📌 Modular Components**  
- **`Todo` Class:** Manages individual task creation, rendering, and event handling.  
- **`FormValidator` Class:** Dynamically validates user input and resets the form upon submission.  
- **`Section` Class:** Handles rendering and displaying task elements dynamically.  
- **`Popup` & `PopupWithForm` Classes:** Manage modal functionality with smooth open/close interactions.  
- **`TodoCounter` Class:** Tracks the total and completed tasks dynamically.  

This modular structure ensures **maintainability, scalability, and clean code**.  

---

## 🚀 **Deployment**
The project is live and hosted on GitHub Pages:
🔗 **[Simple Todo App](https://github.com/KevinJonesM/se_project_todo-app.git)**

---

## **🔥 Final Thoughts**  
The **Simple Todo App** is designed for efficiency, ease of use, and scalability. Whether you're keeping track of daily chores or planning your next project